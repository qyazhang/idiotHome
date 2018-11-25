# IdoitHome
An "idiot home project" using RaspberryPi and Google Home to control devices with IR
## lirc rc file
"LIRC is a package that allows you to decode and send infra-red signals of many (but not all) commonly used remote controls."
Here saved the IR code from light, TV etc in my own home.  
Users could gain their own IR code using lirc with IR sensors or find public library.

## IR Control Server
A simple Node.JS server by receiving HTTP requests and send corresponding LIRC control command.

## Future Work
(1)Security for HTTP requests.  
(2)More sensors with extended function.
