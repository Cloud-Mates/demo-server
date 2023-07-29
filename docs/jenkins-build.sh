# git pull origin main                                    # pull src code from github
sudo docker ps -a | grep "nodejs-demo-container" &&         # if docker container named "nodejs-demo-container" exists go to next
sudo docker stop nodejs-demo-container &&                   # stop the container named "nodejs-demo-container", if success got to next
sudo docker rm nodejs-demo-container		                # remove the container named "nodejs-demo-container"
sudo docker images | grep "nodejs-demo-image" &&            # if image named "nodejs-demo-image" exists go to next
sudo docker rmi nodejs-demo-image                           # remove the image named "nodejs-demo-image"
sudo docker build -t nodejs-demo-image .                    # build docker image from that src code
sudo docker run --name nodejs-demo-container -p 3001:3000 -d nodejs-demo-image
    # run a container from the image which has the tag: "nodejs-demo-image", name it "nodejs-demo-container", and bind port of 3001:external with 3000:internal
