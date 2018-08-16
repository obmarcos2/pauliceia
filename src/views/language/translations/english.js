import termsEN from './termsEN'

export default {
    "nav": {
        "explore": "Explore",
        "about": "About",
        "login": "Sign In",
        "profile": "My Profile",
        "dashboard": "Dashboard",
        "logout": "Logout",
        "msgLogout": "bye bye see you!"
    },
    "dashboard": {
        "nav": {
            "home": "Home",
            "infos": "Information",
            "newLayer": "New Layer",
            "keywords": "keywords",
            "layer": "Layers"
        },
        "home":{
            "dashboard": "Dashboard",
            "notifications": "Notifications",
            "myLayers": "My Layers",
            "sharedLayers": "Shared Layers"
        },
        "newLayer": {
            "name": "Name",
            "keywords": "Keywords",
            "collaborators": "Collaborators",
            "description": "Description",
            "reference": "Reference",
            "addedReferences": "Addes References",
            "add": "Add",
            "submit": "Submit",
            "fileInput": "File Input",
            "zipFile": "ZIP File",
            "nameD": "Layer name. It is unique in the system.",
            "keywordsD": "Keyword is a tag/label related to the layer, which indicates what type it belongs, such as streets, addresses, crimes and so on.",
            "collaboratorsD": "Collaborators are the people who can add, edit or remove the vectors from the layer. Vectors are the geometries from the layer, such as a point, line, or polygon.",
            "descriptionD": "Description is a description/information about the layer.",
            "referenceD": "Reference is the source of that data, whether it is from a book, article, dissertation or so on. It should be in the ABNT format.",
            "epsgD": "It is the projection of the Shapefile, a integer number, for example 4326",
            "fileInputD": "The file that will be inserted is a ZIP compressed file that contains the Shapefile to be sent. Inside this ZIP file should contains all the files of a Shapefile, such as “.shp“, “.prj“, “.dbf“ and so on.",
            "chooseFile": "Choose file",
            "temporalColumns": "Temporal Columns",
            "startDate": "Star Date",
            "endDate": "End Date",
            "startDateColumn": "Start Date Column",
            "endDateColumn": "End Date Column",
            "startDateMask": "Start Date Mask",
            "endDateMask": "End Date Mask"
        },
        "editLayer": {
            "delete": "Delete",
            "layer": "Layer Edit",
            "editLayer": "Edit Layer"
        },
        "keywords":{
            "keywords": "Keywords",
            "newKeyword": "New Keyword",
            "myKeywords": "My Keywords",
            "name": "Name",
            "nameD": "NameD"
        }
    },
    "login": {
        "inputEmail": "Email address",
        "inputPassword": "Password",
        "register": "Register now",
        "btnText": "Login",
        "terms": "If you sign in with the social network, you automatically agree to the terms of the project.",
        "lbReadme": "read the terms here",
        "msg": {
            "success": "WELCOME",
            "err404": "<strong>Email</strong> or <strong>password</strong> incorrect!",
            "err409": "You have <strong>not yet confirmed your email</strong>, access your email box and confirm it by following instructions!"
        }
    },
    "register": {
        "title": "Register",
        "lbName": "Name",
        "lbEmail": "Email address",
        "lbUsername": "Username",
        "lbPassword": "Password",
        "lbCheckNotification": "Receive notification by email",
        "lbCheckAgree": "I agreeto the termsof use.",
        "lbReadme": "read the terms here",
        "btnTitle": "Register",
        "lbToLogin": "Are you already registered?",
        "lbToLoginLink": "CLICK HERE",
        "msg": {
            "success": "your registration is almost ready. Just access your email and follow the instructions.",
            "emptyField": "ERROR: complete all fields!",
            "err500": "Error internal server - contact your administrator",
            "err409": "<strong>email</strong> or <strong>username</strong> already exists in our system."
        }
    },
    "validEmail": {
        "msgSuccess": "Hello, your email was <strong>successfully</strong> validated! Now just <i>log in</i> to access the system.",
        "msgErr": "Error while validating your Email. Invalid link!"
    },
    "validSocial": {
        "msgSuccess": "WELCOME",
        "msgErr": "Error logging in. Invalid link!"
    },
    "map":{
        "geocoding": {
            "label":  "Search Address",
            "placeholder": "street name, number, year",
            "btnText": "Search"
        },
        "sidebarLayer": {
            "title": "Layers",
            "btnAdd": "Add and remove layers",
            "options": {
                "zoom": "Zoom",
                "infosLayer": "Layer information",
                "infosVector": "Information about objects",
                "editColor": "Edit color",
                "download": "Download"
            },
            "msgEmpty": "Add layers to the view on the map!"
        },
        "sidebarEdit": {
            "title": "Edit"      
        },
        "addLayer": {
            "title": "Add and remove layers",
            "input": "Search by theme, layer or author:",
            "close": "Close",
            "box": {
                "lbTitle": "TITLE",
                "lbAuthors": "AUTHORS",
                "lbTags": "TAGS"
            },
            "btns": {
                "active": "Active",
                "disable": "Disable"
            },
            "msg": {
                "errTitle": "Internal Error",
                "errMsg": "Service not available, try again later or report our support!"
            }
        },
        "viewInfo": {
            "btnFollow": "Follow Layer",
            "lbDescription": "DESCRIPTION",
            "lbTags": "TAGS",
            "lbAuthors": "AUTHORS",
            "lbDate": "CREATION DATE",
            "lbReferences": "REFERENCES",
            "lbNotifications": "Notifications"
        },
        "viewInfoVector": {
            "title": "Select Information",
            "btnFeature": "By location",
            "btnBox": "By region",
            "btnClean": "Clean"
        }
    },
    "terms": {
        "title": "USE TERMS",
        "text": termsEN
    }
}
