# jtpl.js
javascript template engine

##usage

Add jtpl.js to your page.

```html
<script src="jtpl.js"></script>
```


You can use `jy.jtpl()` in a easy way, here is the code:

#### Example 1:
```javascript
var tplstr='<h1>Use {v1} to replace {v2}</h1>';
document.write(jy.jtpl(tplstr, '"\{v1\}"',"\{v1\}"));
```
  get the result:
```html
<h1>Use "{v1}" to replace {v1}</h1>
```
***
####  Example 2:
```javascript
var tplstr='<h2>multi-parameter can be a number:{v1}/boolean:{v2}/string:{v3}</h2>';
document.write(jy.jtpl(tplstr, 12345,true,"str"));
```
get the result:
```html
<h2>multi-parameter can be a number:12345/boolean:true/string:str</h2>
```
***
####  Example 3:
```javascript
	var o={
    "a": 1,
    "b": "b",
    "c": {
        "c1": "c1",
        "c2": {
            "d1": "d1",
            "d2": {
                "e1": 0
            }
        }
    }
   };
var tplstr="<h3>json object/{a}/{b}/{c.c1}/{c.c2.d1}/{c.c2.d2.e1}</h3>";
document.write(jy.jtpl(tplstr, o));
```

get the result:
```html
<h3>json object/1/b/c1/d1/0</h3>
```
