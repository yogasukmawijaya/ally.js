define(function defineDemoFocusableChrome(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Chrome 44.0.2403.125 on OS X 10.10.4",
      "layout": "Blink",
      "manufacturer": null,
      "name": "Chrome",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36",
      "version": "44.0.2403.125",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.10.4"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=password]",
      "input[type=password][tabindex=-1]",
      "input[type=checkbox]",
      "input[type=checkbox][tabindex=-1]",
      "input[type=radio]",
      "input[type=radio][tabindex=-1]",
      "input[type=submit]",
      "input[type=submit][tabindex=-1]",
      "input[type=reset]",
      "input[type=reset][tabindex=-1]",
      "select",
      "select[tabindex=-1]",
      "textarea",
      "textarea[tabindex=-1]",
      "button[type=button]",
      "button[type=button][tabindex=-1]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "img[usemap][tabindex=-1]",
      "a:has([ismap])",
      "a[tabindex=-1]:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "a > img[ismap][tabindex=-1]",
      "iframe",
      "iframe[tabindex=-1]",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "keygen",
      "keygen[tabindex=-1]",
      "details summary",
      "details[tabindex=-1]",
      "details[tabindex=-1] summary",
      "details summary[tabindex=-1]",
      "details[open] summary",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][tabindex=-1]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][tabindex=-1]",
      "object[src=svg][height=0]",
      "svg a[xlink|href]",
      "svg[tabindex=-1]",
      "svg[tabindex=-1] a[xlink|href]",
      "svg a[xlink|href][tabindex=0]",
      "svg a[xlink|href][tabindex=-1]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[contenteditable][tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "div[tabindex=0]:empty",
      "div[tabindex=-1]:empty",
      "span[tabindex=0]:empty",
      "span[tabindex=-1]:empty",
      "fieldset[tabindex=0][disabled]",
      "fieldset[tabindex=-1][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}",
      "span{user-modify}",
      "span{user-modify}[tabindex=-1]",
      "canvas > input",
      "canvas > input[tabindex=-1]",
      "canvas > a",
      "canvas > a[tabindex=-1]",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusEvents": [
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=password]",
      "input[type=password][tabindex=-1]",
      "input[type=checkbox]",
      "input[type=checkbox][tabindex=-1]",
      "input[type=radio]",
      "input[type=radio][tabindex=-1]",
      "input[type=submit]",
      "input[type=submit][tabindex=-1]",
      "input[type=reset]",
      "input[type=reset][tabindex=-1]",
      "select",
      "select[tabindex=-1]",
      "textarea",
      "textarea[tabindex=-1]",
      "button[type=button]",
      "button[type=button][tabindex=-1]",
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "img[usemap][tabindex=-1]",
      "a:has([ismap])",
      "a[tabindex=-1]:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "a > img[ismap][tabindex=-1]",
      "iframe",
      "iframe[tabindex=-1]",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "keygen",
      "keygen[tabindex=-1]",
      "details summary",
      "details[tabindex=-1]",
      "details[tabindex=-1] summary",
      "details summary[tabindex=-1]",
      "details[open] summary",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][tabindex=-1]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][tabindex=-1]",
      "object[src=svg][height=0]",
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect",
      "svg[tabindex=-1]",
      "svg[tabindex=-1] a[xlink|href]",
      "svg[tabindex=-1] a[xlink|href] text",
      "svg text",
      "svg rect",
      "svg:has(a[tabindex=0])",
      "svg a[xlink|href][tabindex=0]",
      "svg a[xlink|href][tabindex=0] text",
      "svg text",
      "svg rect",
      "svg:has(a[tabindex=-1])",
      "svg a[xlink|href][tabindex=-1]",
      "svg a[xlink|href][tabindex=-1] text",
      "svg text",
      "svg rect",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[contenteditable][tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "div[tabindex=0]:empty",
      "div[tabindex=-1]:empty",
      "span[tabindex=0]:empty",
      "span[tabindex=-1]:empty",
      "fieldset[tabindex=0][disabled]",
      "fieldset[tabindex=-1][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}",
      "span{user-modify}",
      "span{user-modify}[tabindex=-1]",
      "canvas > input",
      "canvas > input[tabindex=-1]",
      "canvas > a",
      "canvas > a[tabindex=-1]",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusRedirection": [
      "label[for=\"label-target\"] --- input[type=text]",
      "label[for=\"label-target-focusable\"] --- input[type=text][tabindex=-1]",
      "label[for=\"label-target\"][tabindex=-1] --- input[type=text]",
      "fieldset legend --- fieldset input"
    ],
    "noFocusMethod": [],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "a:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "iframe",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "keygen",
      "details summary",
      "details[tabindex=-1] summary",
      "details[open] summary",
      "details[open] a[href]",
      "svg a[xlink|href]",
      "svg[tabindex=-1] a[xlink|href]",
      "svg a[xlink|href][tabindex=0]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "div[tabindex=0]:empty",
      "span[tabindex=0]:empty",
      "fieldset[tabindex=0][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "span{user-modify}",
      "canvas > input",
      "canvas > a",
      "canvas > [tabindex=0]"
    ],
    "ally": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=text][tabindex=-1]",
        "input[type=password]",
        "input[type=password][tabindex=-1]",
        "input[type=checkbox]",
        "input[type=checkbox][tabindex=-1]",
        "input[type=radio]",
        "input[type=radio][tabindex=-1]",
        "input[type=submit]",
        "input[type=submit][tabindex=-1]",
        "input[type=reset]",
        "input[type=reset][tabindex=-1]",
        "select",
        "select[tabindex=-1]",
        "textarea",
        "textarea[tabindex=-1]",
        "button[type=button]",
        "button[type=button][tabindex=-1]",
        "label[tabindex=-1]",
        "label[tabindex=0]",
        "label[for=\"label-target\"][tabindex=-1]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "area[href][tabindex=-1].upper",
        "area[href][tabindex=-1].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "img[usemap][tabindex=-1]",
        "a:has([ismap])",
        "a[tabindex=-1]:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "a > img[ismap][tabindex=-1]",
        "iframe",
        "iframe[tabindex=-1]",
        "audio[controls]",
        "audio[controls][tabindex=-1]",
        "video[controls]",
        "video[controls][tabindex=-1]",
        "embed",
        "embed[tabindex=-1]",
        "keygen",
        "keygen[tabindex=-1]",
        "details summary",
        "details[tabindex=-1]",
        "details[tabindex=-1] summary",
        "details summary[tabindex=-1]",
        "details[open] summary",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][tabindex=-1]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][tabindex=-1]",
        "object[src=svg][height=0]",
        "svg a[xlink|href]",
        "svg[tabindex=-1]",
        "svg[tabindex=-1] a[xlink|href]",
        "svg a[xlink|href][tabindex=0]",
        "svg a[xlink|href][tabindex=-1]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[contenteditable][tabindex=-1]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=hello]",
        "[tabindex=3 ]",
        "[tabindex=3x]",
        "fieldset[tabindex=0][disabled]",
        "fieldset[tabindex=-1][disabled]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "[tabindex=\"-1\"]{flexbox}",
        "span{user-modify}[tabindex=-1]"
      ],
      "tabOrder": [
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "[tabindex=3x]",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "label[tabindex=0]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "a:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "iframe",
        "audio[controls]",
        "video[controls]",
        "embed",
        "keygen",
        "details summary",
        "details[tabindex=-1] summary",
        "details[open] summary",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg a[xlink|href]",
        "svg[tabindex=-1] a[xlink|href]",
        "svg a[xlink|href][tabindex=0]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=0]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}"
      ]
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=text][tabindex=-1]",
        "input[type=password]",
        "input[type=password][tabindex=-1]",
        "input[type=checkbox]",
        "input[type=checkbox][tabindex=-1]",
        "input[type=radio]",
        "input[type=radio][tabindex=-1]",
        "input[type=submit]",
        "input[type=submit][tabindex=-1]",
        "input[type=reset]",
        "input[type=reset][tabindex=-1]",
        "select",
        "select[tabindex=-1]",
        "textarea",
        "textarea[tabindex=-1]",
        "button[type=button]",
        "button[type=button][tabindex=-1]",
        "label[tabindex=-1]",
        "label[tabindex=0]",
        "label[for=\"label-target\"][tabindex=-1]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "area[href][tabindex=-1].upper",
        "area[href][tabindex=-1].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "img[usemap][tabindex=-1]",
        "a:has([ismap])",
        "a[tabindex=-1]:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "a > img[ismap][tabindex=-1]",
        "iframe[tabindex=-1]",
        "audio[controls][tabindex=-1]",
        "video[controls][tabindex=-1]",
        "embed[tabindex=-1]",
        "keygen[tabindex=-1]",
        "details[tabindex=-1]",
        "details summary[tabindex=-1]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][tabindex=-1]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][tabindex=-1]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "svg[tabindex=-1]",
        "[contenteditable][tabindex=-1]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "div[tabindex=0]:empty",
        "div[tabindex=-1]:empty",
        "fieldset[tabindex=0][disabled]",
        "fieldset[tabindex=-1][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "[tabindex=\"-1\"]{flexbox}",
        "span{user-modify}[tabindex=-1]"
      ],
      "tabOrder": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "label[tabindex=0]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "img[tabindex=-1] area[href].upper",
        "img[tabindex=-1] area[href].lower",
        "a:has([ismap])",
        "a:has([ismap][tabindex=-1])",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "div[tabindex=0]:empty",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}"
      ]
    }
  };
});