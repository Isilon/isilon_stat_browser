#! /usr/bin/env python
"""
Parse a hexa key/lists-of-values doc into a dict.

-Input-
::::::
:::keyA
value1

:::keyB
value1
value3
value5

::::::
:::key20
valuesA

-Outputs-
[{'keyA': ['value1'], 'keyB': ['value1', 'value3', 'value5']}, {'key20': ['valuesA']}]

"""

import fileinput
import json
import re
import logging
import pytest

def is_new_block(line):
    """Determine whether a string marks a new block."""
    if re.match('::::::$', line):
        if len(line[3:]) > 0:
            return True
    else:
        return False


def is_key(line):
    """Determine whether a string is a key."""
    if re.match(':::[^:].*', line):
        if len(line[3:]) > 0:
            return True
    else:
        return False

def is_comment(line):
    """Determine whether a string is a key."""
    if re.match('#', line):
        return True
    else:
        return False


def hexakey(line):
    """Parse a key from a hexakey."""
    if not is_key(line):
        raise ValueError
    return line[3:].strip()


def hexaparse(hexainput=None):
    """
    Parse a hexa file.

    Parses a hexa formatted text file into dicts. If hexainput is none reads from
    a file name passed in sysargs, else from stdin.

    :param hexainput: A file-like object containing lines to be parsed
    :returns: An array of dicts
    """
    logging.basicConfig(level=logging.INFO, datefmt='%Y-%m-%dT%H:%M:%S',
                        format='%(asctime)s [%(levelname)s] %(message)s')
    logging.debug('Logging started')
    output = []
    output_block = {}
    key = None
    values = []
    if not hexainput:
        hexainput = fileinput.input()
    line_num = 1
    for line in hexainput:
        line = line.strip()
        logging.debug('Parsing line: ', line=line)
        if is_comment(line):
            continue
        elif is_key(line):
            if key:
                # Don't try to save values if this is the first key
                output_block[key] = values
            key = hexakey(line)
            values = []
        elif is_new_block(line):
            if output_block != {}:
                output_block[key] = values
                output.append(output_block)
                output_block = {}
                values = []
                key = None
        else:
            if line != '':
                if not key:
                    raise ValueError('Key (:::key) must be set before adding value "{0}" on line {1}.'.format(line, line_num))
                values.append(line)
        line_num += 1
    # Save the final keys, values
    if key:
        output_block[key] = values
        output.append(output_block)
    return output


if __name__ == '__main__':
    print(json.dumps(hexaparse(), indent=2))


def test_is_new_block_1():
    """Test proper block marker."""
    assert is_new_block('::::::')


def test_is_new_block_2():
    """Test proper block marker with newline."""
    assert is_new_block('::::::\n')


def test_is_new_block_5():
    """Test non block marker."""
    assert not is_new_block(':::::')


def test_is_new_block_6():
    """Test non block marker with newline."""
    assert not is_new_block(':::::\n')


def test_is_new_block_7():
    """Test non block marker."""
    assert not is_new_block('::::')


def test_is_new_block_8():
    """Test non block marker."""
    assert not is_new_block(' ::::::')


def test_parse_01():
    """Parse basic 1 key 1 val input."""
    hexainput = [':::key1', 'value1']
    expected = [{'key1': ['value1']}]
    result = hexaparse(hexainput)
    assert result == expected


def test_parse_02():
    """Parse basic 1 key 2 val input."""
    hexainput = [':::key1', 'value1', 'value2']
    expected = [{'key1': ['value1', 'value2']}]
    result = hexaparse(hexainput)
    assert result == expected


def test_parse_03():
    """Parse basic 2 key 2 vals input."""
    hexainput = [':::key1', 'value1', 'value2', ':::key2', 'valueA', 'valueB']
    expected = [{'key1': ['value1', 'value2'], 'key2': ['valueA', 'valueB']}]
    result = hexaparse(hexainput)
    assert result == expected


def test_parse_04():
    """Parse 1 block with sep."""
    hexainput = [':::key1', 'value1', 'value2', ':::key2', 'valueA', 'valueB',
                 '::::::', ]
    expected = [{'key1': ['value1', 'value2'], 'key2': ['valueA', 'valueB']}]
    result = hexaparse(hexainput)
    print ('expected: {0}'.format(expected))
    print ('actual:   {0}'.format(result))
    assert result == expected


def test_parse_05():
    """Parse 2 blocks."""
    hexainput = [':::key1', 'value1', 'value2', ':::key2', 'valueA', 'valueB',
                 '::::::', ':::keyA', 'valueZ', 'valueX']
    expected = [{'key1': ['value1', 'value2'], 'key2': ['valueA', 'valueB']},
                {'keyA': ['valueZ', 'valueX']}]
    result = hexaparse(hexainput)
    print ('expected: {0}'.format(expected))
    print ('actual:   {0}'.format(result))
    assert result == expected


def test_parse_06():
    """Parse key with no values."""
    hexainput = [':::key1', 'value1', 'value2', ':::key2']
    expected = [{'key1': ['value1', 'value2'], 'key2': []}]
    result = hexaparse(hexainput)
    assert result == expected


def test_parse_07():
    """Parse with leading block sep."""
    hexainput = ['::::::', ':::key1', 'value1', 'value2']
    expected = [{'key1': ['value1', 'value2']}]
    result = hexaparse(hexainput)
    assert result == expected


def test_parse_08():
    """Parse with surrounding block sep."""
    hexainput = ['::::::', ':::key1', 'value1', 'value2', '::::::']
    expected = [{'key1': ['value1', 'value2']}]
    result = hexaparse(hexainput)
    assert result == expected


def test_parse_09():
    """Parse with commas in keys and values."""
    hexainput = ['::::::', ':::key:1', 'value:1', 'value:2', '::::::', ':::key::2', 'value::2']
    expected = [{'key:1': ['value:1', 'value:2'], 'key::2': ['value::2']}]
    result = hexaparse(hexainput)
    assert result == expected

def test_parse_10():
    """Parse with commas in keys and values."""
    hexainput = ['::::::', '# a comment', ':::key:1', 'value:1', '#another comment', 'value:2', '::::::', ':::key::2', 'value::2']
    expected = [{'key:1': ['value:1', 'value:2'], 'key::2': ['value::2']}]
    result = hexaparse(hexainput)
    assert result == expected


def test_is_key_1():
    """Test valid key."""
    assert is_key(':::key')


def test_is_key_2():
    """Test non-key."""
    assert not is_key('::key')


def test_is_key_3():
    """Test non-key."""
    assert not is_key(':key')


def test_is_key_4():
    """Test non-key."""
    assert not is_key(' :::key')


def test_is_key_7():
    """Test non-key."""
    assert not is_key(':::')


def test_hexakey_1():
    """Test valid key."""
    assert hexakey(':::key') == 'key'


def test_hexakey_2():
    """Test valid key."""
    assert hexakey(':::key ') == 'key'


def test_hexakey_3():
    """Test non-key."""
    with pytest.raises(ValueError):
        hexakey(':')


def test_hexakey_4():
    """Test non-key."""
    with pytest.raises(ValueError):
        hexakey(': ')


def test_hexakey_comment_0():
    """Test comment."""
    assert is_comment('# a comment')

def test_hexakey_comment_1():
    """Test comment."""
    assert is_comment('#a comment')

def test_hexakey_comment_3():
    """Test comment."""
    assert is_comment('#')

def test_hexakey_comment_4():
    """Test non-comment."""
    assert not is_comment(' #not a comment')
