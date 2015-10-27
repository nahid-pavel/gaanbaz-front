fs-concatenate
==============

Concatenate static content to a common js / node js module 

It is a personal module i am using with ngCli to convert static content to a node js module , help me in reducing IO
calls using fs.

Download it locally not globally ( otherwise it will use absolute path for keys ) , and run below command to convert 
your static content inside a directory to a nodejs module.

```javascript

<module_path> -i <input_directory> -o <output_path>

```

## Example

```javascript

./node_modules/fs-concatenate -i content -o module.js

```

Ask me personally if you plan to use this module and face any difficulties.
