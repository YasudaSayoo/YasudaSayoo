

# 搭建Docker私有库

## pull registry镜像

```bash
lixun@aliecs:~$ docker pull registry
Using default tag: latest
latest: Pulling from library/registry
7264a8db6415: Pull complete 
c4d48a809fc2: Pull complete 
88b450dec42e: Pull complete 
121f958bea53: Pull complete 
7417fa3c6d92: Pull complete 
Digest: sha256:e642e8604d305a3b82c8c1807b5df7a1a84cc650d57a60f9c5c2b78efec54b3f
Status: Downloaded newer image for registry:latest
docker.io/library/registry:latest
```

## 自定义Docker镜像

```bash
lixun@aliecs:~$ docker run -it ubuntu bash
# 更新apt-get源
lixun@aliecs:~$ apt-get update
# 添加vim
lixun@aliecs:~$ apt-get install vim
```

## 验证私有库Registry有什么镜像

```bash
lixun@aliecs:~$ curl -XGET http://47.94.11.160:6210/v2/_catalog
{"repositories":[]}
```

## 镜像修改古河私服规范的 tag

```bash
lixun@aliecs:~$ docker tag sayo_ubuntu:1.01 47.94.11.160:6210/sayo_ubuntu:1.01
```

## 修改配置文件使之支持http

```bash
# /etc/docker/daemon.json
lixun@aliecs:~$ cat /etc/docker/daemon.jso
{
  "registry-mirrors": ["https://m4wwck5t.mirror.aliyuncs.com"],
  "insecure-registries": ["47.94.11.160:6210"]
}
```

# push 到私服库

```bash
lixun@aliecs:~$ docker push 47.94.11.160:6210/sayo_ubuntu:1.01
The push refers to repository [47.94.11.160:6210/sayo_ubuntu]
e20704d57db4: Pushed 
bce45ce613d3: Pushed 
1.01: digest: sha256:44da364f548088222c3a36df3a5c9ce31d29477e76cb6fa83d86511a7ad6d746 size: 741

lixun@aliecs:~$ curl -XGET http://47.94.11.160:6210/v2/_catalog
{"repositories":["sayo_ubuntu"]}
```

## 从私服库 pull 镜像

```bash
lixun@aliecs:~$ docker pull 47.94.11.160:6210/sayo_ubuntu:1.01
1.01: Pulling from sayo_ubuntu
99de9192b4af: Already exists 
a8b5712d31ba: Already exists 
Digest: sha256:44da364f548088222c3a36df3a5c9ce31d29477e76cb6fa83d86511a7ad6d746
Status: Downloaded newer image for 47.94.11.160:6210/sayo_ubuntu:1.01
47.94.11.160:6210/sayo_ubuntu:1.01

lixun@aliecs:~$ docker run -it 47.94.11.160:6210/sayo_ubuntu:1.01 bash
```
