[back to README.md](../README.md)

## Configuration 

This plugin applies the following configuration


### Templates

#### [docs/api.md.hbs](src/templates/docs/api.md.hbs)

```hbs
[back to README.md](../README.md)

## Configuration 

This plugin applies the following configuration

{{#thoughtPluginConfig}}

{{#if handlebars.templates}}
### Templates

{{#each handlebars.templates}}
#### [{{@key}}]({{path}})

{{#codeBlock}}hbs
{{{contents}}}
{{/codeBlock}}
    
{{/each}}        

{{/if}}

{{#if handlebars.partials}}
### Partials

{{#each handlebars.partials}}
#### [{{@key}}]({{path}})

{{#codeBlock}}hbs
{{{contents}}}
{{/codeBlock}}

{{/each}}

{{/if}}

### Helpers

{{jsdoc handlebars.helpers}}
    
{{/thoughtPluginConfig}}
```    


### Partials

#### [api.md.hbs](src/partials/api.md.hbs)

```hbs
## API (Partials and Helpers)

see [docs/api.md](docs/api.md)
```
#### [example.md.hbs](src/partials/example.md.hbs)

```hbs
{{!--
  This partial can be overridden to provide non-standard 
  information about example projets etc.
--}}
## Example

You can see the plugin in action in [the example-project](examples/example-project)


```
#### [installation.md.hbs](src/partials/installation.md.hbs)

````hbs
## Installation

In order to use this plugin for {{npm 'thought'}},
first add it to the dev-dependencies of your project

```bash
npm install --save-dev {{package.name}}
```

````
#### [usage.md.hbs](src/partials/usage.md.hbs)

````hbs
## Usage

You can then add a file `.thought/config.js` to your 
project, with the following contents.

```js
module.exports = {
  plugins: [
    require('{{package.name}}')
  ]
}
```

{{>example.md}}
````


### Helpers

## Functions

<dl>
<dt><a href="#codeBlock">codeBlock()</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Create a <a href="http://daringfireball.net/projects/markdown/syntax#code">markdown code-block</a> with enough backticks</p>
<p>The surrounding fences of a code-block must have more backticks than the maximum number of
consecutive backticks in the contents (escaping backticks <a href="https://github.com/github/markup/issues/363">https://github.com/github/markup/issues/363</a>).
This block-helper creates enough and at least three.</p>
</dd>
<dt><a href="#thoughtPluginConfig">thoughtPluginConfig(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Continue with the thought-configuration of the current plugin</p>
<p>The helper loads the thought-configuration from the plugin in the current
working directory and passed the resulting JSON as context to
the content-block.</p>
</dd>
</dl>

<a name="codeBlock"></a>

## codeBlock() ⇒ <code>Promise.&lt;string&gt;</code>
Create a [markdown code-block](http://daringfireball.net/projects/markdown/syntax#code) with enough backticks

The surrounding fences of a code-block must have more backticks than the maximum number of
consecutive backticks in the contents (escaping backticks https://github.com/github/markup/issues/363).
This block-helper creates enough and at least three.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - the string containing the  
**Example**  
```js
{{#codeBlock}}hbs
Some markdown hbs template
{{/codeBlock}}
```
<a name="thoughtPluginConfig"></a>

## thoughtPluginConfig(options) ⇒ <code>Promise</code>
Continue with the thought-configuration of the current plugin

The helper loads the thought-configuration from the plugin in the current
working directory and passed the resulting JSON as context to
the content-block.

**Kind**: global function  
**Access**: public  

| Param |
| --- |
| options | 


    
