# monthlyPYLONVolume
##Overview
The tool allows you to quickly generate a report that shows PYLON account usage for the last 32 days.
It works by hitting the PYLON /get endpoint and generating a comma separated output listing the name, ID, and trailing 32 interactions for all indexes in an account.

##Installation
Clone the repo:

```git clone https://github.com/samaybar/monthlyPYLONVolume.git```

```cd monthlyPYLONVolume```

Install node module dependencies:

```sudo npm install```

##Usage
```node monthlyVolume.js username:datasift_account_apikey > OUTPUT_FILENAME.csv```

##Customization
To avoid inputting credentials each time you run the script, you can adjust monthlyVolume.js to include your credentials, as specified in comments.