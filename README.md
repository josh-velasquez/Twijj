# Twijj

Streaming service

Twijj is a web application platform that allows users to easily live stream and share content with any number of other viewers online.
Alongside streaming or viewing streams, users can also interact with each other through a live chat in each stream, and communicate with the stream host.

## Authors:

Emilio Alvarez Veronesi, Jeffery Huo, Jeffery Swarts, Joshua Velasquez, Yue Zhang

## Website Link:

[https://twijj-271803.web.app/](https://twijj-271803.web.app/)

## Associated Github Repositories

Client Side -> [https://github.com/josh-velasquez/TwijjChatServer](https://github.com/josh-velasquez/Twijj)
Chat Server Side -> [https://github.com/josh-velasquez/TwijjChatServer](https://github.com/josh-velasquez/TwijjChatServer)
Stream Server Side -> [https://github.com/josh-velasquez/TwijjStreamServer](https://github.com/josh-velasquez/TwijjStreamServer)

## Tools and Applications Used

Database -> Firebase
Server -> AWS (Chat and Stream)
Hosting -> Google platform/Firebase

## Web Browser Setup

### Allowing Insecure Content

Once the webapp is launched, navigate to your browser settings and then to site settings and allow for insecure content.
Since the stream from the AWS servers is sent over http without encryption, this is needed for the stream request to the AWS server to work.

### Enabling Third-Party Cookies

While in site settings, allow for third-party settings since this is needed by the Google Sign In.

## Deployment Instructions

### Cloning Github Repositories

#### Cloning Twijj

`git clone https://github.com/josh-velasquez/Twijj`
Navigate to the client folder
`npm install`
To run the application
`npm start`

#### Cloning Twijj Chat Server

`git clone https://github.com/josh-velasquez/TwijjChatServer`
Navigate to folder
`npm install`
To run the application
`npm start`

#### Cloning Twijj Stream Server

`git clone https://github.com/josh-velasquez/TwijjStreamServer`
Navigate to rtmpserver folder
`npm install`
To run the application
`npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>
<br>
<br>

# Live Deployment

## Deploying To Build To Firebase

To deploy the client code to firebase, run the following command on the client folder:
`npm run build`

This will generate a build folder. Run the following command to deploy to website:
`firebase deploy`

## Setting Up AWS Servers

There are two servers that are responsible for processing the stream and chat of the webapp. Both are running on AWS.

### Starting Servers

Start the instance state for both Twijj Chat and Twijj Stream Servers. Once running copy the IPv4 Public IP's for each server.
SSH into each respective servers using the command
`ssh -i ~/.ssh/<.pem file> ec2-user@<ip address>`
Once you are logged in, navigate to the project folder and run the following command to run the server.
`npm start`
NOTE: You must do this twice on separate terminals. One for the chat and one for the stream server.

Once this is set up, navigate to the Twijj database in firebase console and open the `serverip` collection.
Paste the IP for each servers accordingly (i.e. Twijj Chat IP -> chatip and Twijj Stream IP -> ip)

## Setting up OBS

Open OBS and navigate to settings -> stream
Navigate to the webapp home page, once your stream is created, click on select settings and copy the Stream URL and Stream Key
Select the Service to Custom and paste the stream URL to the Server and the Stream Key to the Stream Key
Select OK to save changes.
