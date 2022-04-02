import os

import boto3

s3resource = boto3.client('s3','us-east-1')

bucketName = "computervisionbucket"


def createFolders():
    base = "base/"

    def addEmotions(str):
        s3resource.put_object(Bucket=bucketName, Key=(str + "angry/"))
        s3resource.put_object(Bucket=bucketName, Key=(str + "disgust/"))
        s3resource.put_object(Bucket=bucketName, Key=(str + "fear/"))
        s3resource.put_object(Bucket=bucketName, Key=(str + "happy/"))
        s3resource.put_object(Bucket=bucketName, Key=(str + "neutral/"))
        s3resource.put_object(Bucket=bucketName, Key=(str + "sad/"))
        s3resource.put_object(Bucket=bucketName, Key=(str + "surprise/"))



    s3resource.put_object(Bucket=bucketName, Key=(base + "images" + "/train/"))
    s3resource.put_object(Bucket=bucketName, Key=(base + "images" + "/validation/"))
    s3resource.put_object(Bucket=bucketName, Key=(base + "train/"))
    s3resource.put_object(Bucket=bucketName, Key=(base + "validation/"))


    addEmotions(base + "images" + "/train/")
    addEmotions(base + "images" + "/validation/")
    addEmotions(base + "train/")
    addEmotions(base + "validation/")

createFolders()


def addFiles():
    for path, subdirs, files in os.walk("base"):

        filesSize = len(files)
        completed = 0

        for file in files:
            dest_path = path.replace("base", "")
            #__s3file = os.path.normpath(dest_path + '/' + file)
            __local_file = os.path.join(path, file)

            __s3file = (path.replace("\\", "/") + "/{}").format(file)
            print(__s3file)

            s3resource.upload_file(__local_file, bucketName, __s3file)
            completed += 1
            print("Uploaded " + str(completed) + "/" + str(filesSize))



addFiles()