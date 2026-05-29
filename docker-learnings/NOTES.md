# Docker commands
 - docker ps        ->   list of all the running process/containers
 - docker ps -a     ->      list of all the containers/process
 - docker images    ->      list of all the docker images
 
 - docker kill <containerID or containerNAME>   ->    used to kill the running container
 - docker stop <containerID or containerNAME>   ->    used to stop running container step by step gracefully

 - docker rmi <imgNAME OR imgID> --force        ->    To remove docker img forcefully
 - docker rm <containerNAME or containerID>     ->    To remove the docker container

 - docker run -d <dockerIMG_NAME>               ->    To run docker container in detached MODE (Background)

 ## PORT MAPPING
    - docker run -p <local_machine_PORT>:<docker_container_PORT> dockerIMG-NAME

 ## Creation of IMG for current REPO -> Need to build
    - docker build -t <tag-name> .

