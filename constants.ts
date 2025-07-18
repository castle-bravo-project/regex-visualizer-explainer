
import { CheatSheetItem, RegexPreset } from './types';

export const regexCheatsheet: CheatSheetItem[] = [
  { token: '.', description: 'Any character except newline', example: "'a.b' matches 'aob'" },
  { token: '\\d', description: 'Any digit (0-9)', example: "'\\d{3}' matches '123'" },
  { token: '\\D', description: 'Any non-digit', example: "'\\D' matches 'a'" },
  { token: '\\w', description: 'Any word character (a-z, A-Z, 0-9, _)', example: "'\\w+' matches 'word_123'" },
  { token: '\\W', description: 'Any non-word character', example: "'\\W' matches '!'" },
  { token: '\\s', description: 'Any whitespace character (space, tab, newline)', example: "'a\\sb' matches 'a b'" },
  { token: '\\S', description: 'Any non-whitespace character', example: "'\\S+' matches 'word'" },
  { token: '[abc]', description: 'Any character in the set (a, b, or c)', example: "'[aeiou]' matches 'a'" },
  { token: '[^abc]', description: 'Any character not in the set', example: "'[^0-9]' matches 'x'" },
  { token: '(a|b)', description: 'Matches either a or b', example: "'cat|dog' matches 'cat' or 'dog'" },
  { token: '^', description: 'Start of the string', example: "'^Start' matches 'Start of sentence'" },
  { token: '$', description: 'End of the string', example: "'end$' matches 'This is the end'" },
  { token: '*', description: 'Zero or more repetitions', example: "'a*' matches '', 'a', 'aa', 'aaa'" },
  { token: '+', description: 'One or more repetitions', example: "'a+' matches 'a', 'aa', 'aaa'" },
  { token: '?', description: 'Zero or one repetition', example: "'colou?r' matches 'color' and 'colour'" },
  { token: '{n}', description: 'Exactly n repetitions', example: "'\\d{3}' matches '123'" },
  { token: '{n,}', description: 'n or more repetitions', example: "'\\d{2,}' matches '12', '123', '1234'" },
  { token: '{n,m}', description: 'Between n and m repetitions', example: "'\\d{2,4}' matches '12', '123', '1234'" },
];

export const regexPresets: RegexPreset[] = [
  {
    name: 'Email',
    regex: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
    testString: 'Contact us at support@example.com or sales@company.co.uk. Invalid: user@.com',
  },
  {
    name: 'URL',
    regex: 'https?://[^\\s/$.?#].[^\\s]*',
    testString: 'Visit our site at https://www.example.com. Also check http://sub.domain.org/path?query=1. Not a url: ftp://file.server',
  },
  {
    name: 'Phone Number (US)',
    regex: '\\(?\\d{3}\\)?[-\\s.]?\\d{3}[-\\s.]\\d{4}',
    testString: 'Call me at (415) 555-1234 or 212-987-6543. My number is 987.654.3210.',
  },
  {
    name: 'Date (YYYY-MM-DD)',
    regex: '\\d{4}-\\d{2}-\\d{2}',
    testString: 'The event is on 2024-07-26. The previous date was 2023-12-15. Invalid format: 26-07-2024.',
  },
  {
    name: 'Hex Color Code',
    regex: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\\b',
    testString: 'Primary color is #FF5733. A secondary shade is #333. Not a hex: #GHIJKL.',
  },
  {
    name: 'IP Address (v4)',
    regex: '\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b',
    testString: 'Server A is at 192.168.1.1, Server B at 10.0.0.255. Invalid: 999.1.1.1 or 127.0.0.1.2',
  },
  {
    name: 'Hash (MD5/SHA256)',
    regex: '\\b[a-fA-F0-9]{32}\\b|\\b[a-fA-F0-9]{64}\\b',
    testString: 'MD5: d41d8cd98f00b204e9800998ecf8427e. SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.',
  },
  {
    name: 'Timestamp (ISO 8601)',
    regex: '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})',
    testString: 'Log entry: 2024-07-26T10:30:00Z. Request time: 2024-07-26T12:00:00.123+01:00. Invalid: 2024/07/26 10:30.'
  },
  {
    name: 'Mixed Data',
    regex: '([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})|(\\(?\\d{3}\\)?[-\\s.]?\\d{3}[-\\s.]\\d{4})',
    testString: 'Contact support@example.com or call 415-555-1234 for help. Sales can be reached at (800) 123-4567.'
  }
];
