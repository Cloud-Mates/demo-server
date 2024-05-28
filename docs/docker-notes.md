==> `docker build -t <tag_name> .`
    build image form dockerfile

==> `docker run --name nodejs-container-demo --restart unless-stopped -p 3001:3000 -p 3002:3000  --network proxy-tunnel  -d <image_id/tag>`

==> `docker run --name nodejs-container-demo -p 3001:3000 -d your_dockerhub_username/nodejs-image-demo`
    Create and run a new container from an image (bind port of 3001:external with 3000:internal)

==> `docker stop <container_id/name>`
    Stop a container

==> `docker restart <container_id/name>`
    Restart a stopped docker container

==> `docker exec -ti <container_id/name> sh`
    Open Shell of docker container

==> `docker rm <container_id/name>`
    Remove a container

==> `docker rmi <image_id/tag>`
    Remove an image

==> `docker inspect <container_id/image_id/name>`
    get details of specified image/container

==> `sudo docker network create --driver bridge <network_name>`
    create docker network

==> `docker network connect proxy-tunnel nodejs-container-demo`
    connect container to a network


==> `docker ps`
    List containers

==> `docker images`
    List images


==>  `docker system prune -a`
    WARNING! This will remove:
      - all stopped containers
      - all networks not used by at least one container
      - all images without at least one container associated to them
      - all build cache




#### links:

https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#global-npm-dependencies



==> `curl -X GET 172.105.36.162:5000/v2/_catalog`
