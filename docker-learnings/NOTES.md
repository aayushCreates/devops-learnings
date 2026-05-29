# Docker commands
 - docker ps -> list of all the process/containers
 - docker images -> list of all the docker images
 
 - docker kill <containerID> -> used to kill the container
 - docker rmi <imgNAME> --force -> need to remove docker img forcefully

 - PORT MAPPING
    -- docker run -p <local_machine_PORT>:<docker_container_PORT> name-of-IMG

 - Creation of IMG for current REPO -> Need to build
    -- docker build -t <tag-name> .

