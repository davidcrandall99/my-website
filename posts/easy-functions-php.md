---
title: Making Wordpress's functions.php easier
date: 08/21/2014
summary: "WordPress’s functions.php could easily be considered the core of your theme. I’m hoping to give some insight in not just making a custom functions.php file for your theme, but making it easy to manage."
---
WordPress’s functions.php could easily be considered the core of your theme. It adds unique, and often necessary functionality to your blog. You can enable features, or create new ones. In this article, I’m hoping to give some insight in not just making a custom functions.php file for your theme, but making it easy to manage.

**How does WordPress the functions.php file work?**

The short version – it extends what WordPress does by modifying existing actions – aka _creating filters_, or adding new ones, aka _creating actions_.  This is done using WordPress _H__ooks_.

Rather than have ME explain it all to you, you should consider reading [WordPress’s explanation of the functions.php file](https://codex.wordpress.org/Functions_File_Explained "Functions File Explained"), so you can gain a more detailed understanding of how it works.

**Don’t hand-code it all**

While you COULD hand code everything – **and I encourage you to learn** – a good starting point might be to… well… cheat!  [www.wpfunction.me](http://www.wpfunction.me/ "http://www.wpfunction.me/") is a handy website that lets you pick your own functions, and it gives you the code for it.  Post thumbnails enabled? No problem! Want to load a custom CSS file to theme your admin area? No sweat.

The nice thing about this tool is it can be a great way to familiarize with the logic behind the functions.php code.  Not sure about code snippet it generates? Google it or search the [wordpress codex](https://codex.wordpress.org/ "Wordpress Codex") to learn about it.  Once you learn about it, tweak it, play with it until you get it exactly how you want.  Maybe make your own custom function!

**Make it a plugin**

The functions.php file is relative to your theme, so you want to be sure that whatever functionality you add to it specifically works to enhance your theme, but doesn’t take away from the core functionality of your blog should you ever change themes, because if you ever switch themes, your custom functions are gone unless you manually copy them over to your new theme.

One way to bypass this caveat is to make a plugin for every function that isn’t _theme_ specific.

To do this, create a new folder for your plugin, and create a new php file inside it.  In this PHP file, insert the required plugin information headers need for WordPress to recognize the plugin, followed by your custom function, like so:

```  
<?php  
/**  
* Plugin Name: Name Of The Plugin  
* Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates  
* Description: A brief description of the Plugin.  
* Version: The Plugin’s Version Number, e.g.: 1.0  
* Author: Name Of The Plugin Author  
* Author URI: http://URI_Of_The_Plugin_Author  
* License: A "Slug" license name e.g. GPL2  
*/

//custom code here  
//you can find this example here:  
// http://codex.wordpress.org/Writing_a_Plugin  
//I strongly recommend reading WordPress’s documentation  
//because it’s relatively easy to follow, and it’s  
//quite informative : )

?> 
```

Now, take your new plugin folder and place it inside wordpress’s ‘plugins’ directory – or, ZIP the file and upload it from the plugins section of the admin area.

If all works well, your function is now a plugin that you can enable, disable, and modify from within the admin area, no matter what theme you use!
