==> `docker build -t <tag_name> .`
    build image form dockerfile
==> `docker run --name nodejs-image-demo -p 3001:3000 -d  -i -t test-image`
==> `docker run --name nodejs-image-demo -p 3001:3000 -d your_dockerhub_username/nodejs-image-demo`
    Create and run a new container from an image (bind port of 3001:external with 3000:internal)
==> `docker stop <id>`
    Stop a container
==> `docker restart <id>`
    Restart a stopped docker container
==> `docker exec -ti container_name sh`
    Open Shell of docker container
==> `docker rm <id>`
    Remove a container
==> `docker rmi <image_id>`
    Remove an image

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