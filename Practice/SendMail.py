import boto3

Mail = boto3.client('ses')
def SendMail(event, context):
    #Configuring the Mail Data.
    Sender = "jawadlee92@gmail.com" #Active Email.
    Receipent = "jawadlee93@gmail.com"
    Region = "us-east-2"
    Subject = "Your Subject goes here."
    Charset = "utf-8"
    Body_Html = """
        <html>
            <head>
            
            </head>
            <body>
                <h2>Your Message Heading.</h2>
                <p>Your Message Data goes here.</p>
            </body>
        </html>
    """
    
    Send_Mail = Mail.send_mail(
        Destination = {
            'ToAddresses' : [
                Receipent
            ]
        },
        Source = Sender,
        Message = {
            'Body' : {
                'Html' : {
                    'Charset' : Charset,
                    'Data' : Body_Html
                }
            },
            'Subject' : {
                'Charset' : Charset,
                'Data' : Subject
            }
        }
    )