Our problem
===========
Display some dynamic content while the page is cached (i.e. served from cache)


Solutions
===========
- "Break" the cache and set the page to non-cacheable from hook_init() with **drupal_page_is_cacheable(FALSE)**
- Use a mix of **hook_boot/hook_exit** to display any html at the bottom of the page
- Or a combination of javascript/html that will asynchronously (**.get()** or **.ajax()** calls from JS world)
  load our message and then display it on the page