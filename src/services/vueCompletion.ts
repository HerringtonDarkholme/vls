import {TextDocument, Position, CompletionList, CompletionItemKind, Range, TextEdit, InsertTextFormat, CompletionItem} from 'vscode-languageserver-types';
import {HTMLDocument} from '../parser/htmlParser';
import {TokenType, createScanner, ScannerState} from '../parser/htmlScanner';
import {allTagProviders} from './tagProviders';
import {CompletionConfiguration} from '../htmlLanguageService';

// Top level vue completion
export function doVueComplete(): CompletionList {
  const result: CompletionList = {
    isIncomplete: false,
    items: []
  };

  result.items.push({
    label: 'scaffold',
    insertTextFormat: InsertTextFormat.Snippet,
    insertText: 
`<template>

</template>

<script>

</script>

<style>

</style>
`
  });

  return result;
}
