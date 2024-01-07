echo "Welcome !!! to DevOpps with Ubantu..."
date
who
echo "ls -l | grep fileName --> for searching the data"
echo "rpm -qa | grep python --> this command return list of all the python related files"
echo "xdg-open . or xdg-open /path/to/the/folder --> To open a particular folder from Terminal to GUI"
echo "\nLets install appache2 serever..."
sudo apt-get install apache2
echo "\nserver install successfully"
service apache2 start
echo "\nServer started successfully"
