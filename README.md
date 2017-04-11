Our problem
===========
Display some dynamic content while the page is cached (i.e. served from cache)


Solutions
===========
1. "Break" the cache and set the page to non-cacheable from hook_init() with **drupal_page_is_cacheable(FALSE)**
2. Use a mix of **hook_boot()/hook_exit()** to display any html at the top/bottom of the page
3. Or a combination of javascript/html that will asynchronously (**.get()** or **.ajax()** calls from JS world)
  load our message and then display it on the page


Branch "hook-boot"
=================
This branch contains code that implements solution no. 2