/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { TextDocument, Range, TextEdit, Position, FormattingOptions } from 'vscode-languageserver-types';
import { html as htmlBeautify, css as cssBeautify, js as jsBeautify } from 'js-beautify';

import { htmlOptions, cssOptions } from './formatterOptions'

export function htmlFormat(document: TextDocument, currRange: Range, formattingOptions: FormattingOptions): TextEdit[] {
  const { value, range } = getValueAndRange(document, currRange);

  htmlOptions.indent_with_tabs = !formattingOptions.insertSpaces;
  htmlOptions.indent_size = formattingOptions.tabSize;

  const result = '\n' + htmlBeautify(value, htmlOptions) + '\n';
  return [{
    range: range,
    newText: result
  }];
}

export function cssFormat(document: TextDocument, currRange: Range, formattingOptions: FormattingOptions): TextEdit[] {
  const { value, range } = getValueAndRange(document, currRange);

  cssOptions.indent_with_tabs = !formattingOptions.insertSpaces;
  cssOptions.indent_size = formattingOptions.tabSize;

  const result = '\n' + cssBeautify(value, cssOptions) + '\n';
  return [{
    range: range,
    newText: result
  }];
}

function getValueAndRange(document: TextDocument, currRange: Range): { value: string, range: Range } {
  let value = document.getText();
  let range = currRange;

  let includesEnd = true;
  if (currRange) {
    let startOffset = document.offsetAt(currRange.start);
    let endOffset = document.offsetAt(currRange.end);
    includesEnd = endOffset === value.length;
    value = value.substring(startOffset, endOffset);
  } else {
    range = Range.create(Position.create(0, 0), document.positionAt(value.length));
  }
  return { value, range };
}