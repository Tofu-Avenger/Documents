# Disclaimer
## This program was made for a challenge and for fun. It is written and javascript and therefore will not be very fast, consistent or optimal (obviously). I am only posting this to github as a slower version of others online that lets you input larger files. This is also my first real project, so im not good at optimising. Any help or optimisation on this i am fine with.

## Tutorials

###### Tutorial for macOS users:
1. Download and unzip.
2. Put contents inside `Macintosh HD/Library/WebServer/Documents` (Finder may ask for your password, to prevent this, see the bottom of the readme in the footnotes[^1])
3. Go to terminal and type `sudo apachectl start`. It will prompt you for your password.
4. Go to your browser and type `localhost` into your search bar to check that its working. If it displays the right page, type `sudo apachectl stop` into the terminal for now. If it only displays 'It Works!', check you have put the contents of the zip into the right place, once this is done, type `sudo apachectl stop` into the terminal for now.
5. Get the image you want to convert and rename it to `src.png`, then go back to the `Webserver/Documents` folder and move your image inside **(replace the existing src.png)**
6. Type `sudo apachectl start` again and go back to localhost. Find how to hard refresh on your browser, and do so (On chrome I believe it is ⌘ + ⇧ + R, On Opera GX it is ⌘ + ⌥ + R)
7. Follow the instructions on the page


## Footnotes
[^1]: Type `whoami` into the terminal to get your short name, then enter `sudo chmod -R +a "yourshortname allow list,add_file,search,add_subdirectory,delete_child,readattr,writeattr,readextattr,writeextattr,readsecurity" /Library/WebServer/Documents` and replace `yourshortname` with the shortname you got from `whoami`