git pull origin main                                    # pull src code from github
sudo docker ps -a | grep "nodejs-image-demo" &&         # if docker container named "nodejs-image-demo" exists go to next
sudo docker stop nodejs-image-demo &&                   # stop the container named "nodejs-image-demo", if success got to next
sudo docker rm nodejs-image-demo		                # remove the container named "nodejs-image-demo"
sudo docker images | grep "demo-server-dockerized" &&   # if image named "demo-server-dockerized" exists go to next
sudo docker rmi demo-server-dockerized                  # remove the image named "demo-server-dockerized"
sudo docker build -t demo-server-dockerized .           # build docker image from that src code
sudo docker run --name nodejs-image-demo -p 3001:3000 -d demo-server-dockerized
    # run a container from the image which has the tag: "demo-server-dockerized", name it "nodejs-image-demo", and bind port of 3001:external with 3000:internal
