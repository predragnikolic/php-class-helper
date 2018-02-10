# PHP Class Helper
Extension for Visual Studio Code. 

Be more productive in writing PHP, JavaScript and TypeScript code with a simple keybinding.

## NOTABLE CHANGES IN LATEST RELEASE

* Separated setting for PHP and TypeScript. 

* Class Helper supports:
    * PHP
    * JavaScript `(NEW)`
    * TypeScript `(NEW)`


For more info about what can you do in JavaScript and TypeScript, see the [CHANGELOG](https://github.com/predragnikolic/php-class-helper/blob/master/CHANGELOG.md) file. 


## What does Class Helper do? 
* Add a class if the cursor is out of the scope of another class.

![Add Class](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/class.gif)

* Add a constructor if the cursor is in scope of a class and there is no constructor.

![Add Constructor](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/constructor.gif)

* Add properties if the cursor is in scope of a class and  if the class has a constructor. Multiline constructor is also supported.  

![Add Properties](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/addVariables.gif)

* Add methods. Public methods are always placed before the first private method.

![Add Methods](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/addMethods.gif)

* Add getters and setters.
    * Getters and setters are placed after a constructor if the constructor exist, if not, they are placed after the last propery. 
    * If the class has a missing getter or setter for a property, then the missing getter or setter will be added. 
    * If the class has a getter and a setter for a property, nothing will be added. 

![Add Getters And Setters](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/addGetterAndSetter.gif)

## How do you do all of that?

* The keybinding to add a class, constructor and properties is `alt+c`.
* The keybinding to add a public method is `alt+m`.
* The keybinding to add a private method is `ctrl+alt+m`.
* The keybinding to add a getter and setter is `alt+m`, and the cursor (not the mouse) must be above the property.

You are free to change the keybindings however you like.

## Settings

PHP specific settings:
```javascript
{
    // Php: default property visibility
    "php-class-helper.php.property.visibility": "private",
}
```

TypeScript specific settings:
```javascript
{
    // TypeScript: prefix method and properties with public or private keywords
    "php-class-helper.ts.prefixVisibility": true,

    // TypeScript: default property visibility
    "php-class-helper.ts.property.visibility": "private",

    // TypeScript: prefix method with the type declaration
    "php-class-helper.ts.method.prefixType": true,

}
```

## Showcase

JavaScript showcase:

![JavaScript Showcase](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/javascriptShowcase.gif)

TypeScript showcase:

![TypeScript Showcase](https://raw.githubusercontent.com/predragnikolic/php-class-helper/master/resources/gifs/typescriptShowcase.gif)


## Known issues

Needs a couple of second to start.

## Idea

This extension is inspired by sublime [php companion](https://github.com/erichard/SublimePHPCompanion) package.
 
Hope you like this :)
