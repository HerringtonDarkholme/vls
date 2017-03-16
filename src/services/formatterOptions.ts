const htmlOptions = {
  brace_style: 'collapse', // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
  end_with_newline: false, // End output with newline
  indent_char: ' ', // Indentation character
  indent_handlebars: false, // e.g. {{#foo}}, {{/foo}}
  indent_inner_html: false, // Indent <head> and <body> sections
  indent_scripts: 'keep', // [keep|separate|normal]
  indent_size: 2, // Indentation size
  indent_with_tabs: false,
  max_preserve_newlines: 1, // Maximum number of line breaks to be preserved in one chunk (0 disables)
  preserve_newlines: true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
  unformatted: ['a', 'span', 'img', 'code', 'pre', 'sub', 'sup', 'em', 'strong', 'b', 'i', 'u', 'strike', 'big', 'small', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], // List of tags that should not be reformatted
  wrap_line_length: 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
};

const cssOptions = {
  end_with_newline: false, // End output with newline
  indent_char: ' ', // Indentation character
  indent_size: 2, // Indentation size
  indent_with_tabs: false,
  newline_between_rules: true, // Add a new line after every css rule
  selector_separator: ' ',
  selector_separator_newline: true // Separate selectors with newline or not (e.g. 'a,\nbr' or 'a, br')
};

const jsOptions = {
  // Set brace_style
  //  collapse: (old default) Put braces on the same line as control statements
  //  collapse-preserve-inline: (new default) Same as collapse but better support for ES6 destructuring and other features. https://github.com/victorporof/Sublime-HTMLPrettify/issues/231
  //  expand: Put braces on own line (Allman / ANSI style)
  //  end-expand: Put end braces on own line
  //  none: Keep them where they are
  brace_style: 'collapse-preserve-inline',
  break_chained_methods: false, // Break chained method calls across subsequent lines
  e4x: false, // Pass E4X xml literals through untouched
  end_with_newline: false, // End output with newline
  indent_char: ' ', // Indentation character
  indent_level: 0, // Initial indentation level
  indent_size: 2, // Indentation size
  indent_with_tabs: false, // Indent with tabs, overrides `indent_size` and `indent_char`
  jslint_happy: false, // If true, then jslint-stricter mode is enforced
  keep_array_indentation: false, // Preserve array indentation
  keep_function_indentation: false, // Preserve function indentation
  max_preserve_newlines: 1, // Maximum number of line breaks to be preserved in one chunk (0 disables)
  preserve_newlines: true, // Whether existing line breaks should be preserved
  space_after_anon_function: false, // Should the space before an anonymous function's parens be added, 'function()' vs 'function ()'
  space_before_conditional: true, // Should the space before conditional statement be added, 'if(true)' vs 'if (true)'
  space_in_empty_paren: false, // Add padding spaces within empty paren, 'f()' vs 'f( )'
  space_in_paren: false, // Add padding spaces within paren, ie. f( a, b )
  unescape_strings: false, // Should printable characters in strings encoded in \xNN notation be unescaped, 'example' vs '\x65\x78\x61\x6d\x70\x6c\x65'
  wrap_line_length: 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
};

export { htmlOptions, cssOptions, jsOptions };