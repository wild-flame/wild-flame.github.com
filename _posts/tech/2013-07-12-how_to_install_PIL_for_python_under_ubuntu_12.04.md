---
layout: post
title: ［Python］如何在ubuntu 12.04下面安装影像处理的库  -- PIL (PYTHON IMAGE LIBRARY)
author: Taffy 
category: tech
description: 之前做影像处理都是用的Matlab, 但这次打算用Python来做，所以在Python上面安装PIL，安装的环境是ubuntu12.04, Python 2.7.3, GCC 4.6.3
---

<!--下面是正文-->
## 1.Install PIL

    $ sudo apt-get install python-imaging
    $ sudo apt-get install libjpeg-dev libfreetype6 libfreetype6-dev zlib1g-dev

然后：

    $ sudo ln -s /usr/lib/`uname -i`-linux-gnu/libfreetype.so /usr/lib/
    $ sudo ln -s /usr/lib/`uname -i`-linux-gnu/libjpeg.so /usr/lib/
    $ sudo ln -s /usr/lib/`uname -i`-linux-gnu/libz.so /usr/lib/

最后：

    $ pip install PIL

一般这样就可以了。完成！^^

----------
但是如果出现：

    gcc -pthread -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fPIC -IlibImaging -I/usr/include -I/usr/local/include -I/usr/include/python2.6 -c _imaging.c -o build/temp.linux-i686-2.6/_imaging.o
    _imaging.c:75:20: error: Python.h: 没有那个文件或目录
    In file included from libImaging/Imaging.h:14,from _imaging.c:77:
    
错误信息，最后的显示结果为：
    command 'gcc' failed with exit status 1
 
就还需要做下面的事情。

----------

**1.安装python-all-dev**

**2.然后执行PIL文件下的setup.py**

----------
参见此君的博文：

<http://blog.sina.com.cn/s/blog_5cd78a5d0101jcza.html>

>*为了找到缺什么，我们运行*
>   *apt-cache search python | grep dev*h
>*没有找到python的C语言开发包。*
>*安装python-all-dev,于是然后执行PIL文件下的setup.py，安装成功。*

--------------

## 2.有用的参考资料：

- 官方文档 <http://effbot.org/imagingbook/>
- 数字图像处理PIL的一个实例 <http://blog.sina.com.cn/s/blog_4b5039210100f6ki.html>
- 一篇关于如何成为Python高手的文章，是从 How to become a proficient Python programmer 这篇文章翻译而来的 <http://www.zhizhihu.com/html/y2011/3093.html>
- 把图片的数据变换成数组<http://blog.csdn.net/zhengkarl/article/details/5731317>

--------------
## 3.References:

- <http://askubuntu.com/questions/156484/how-do-i-install-python-imaging-library-pil>
- <http://www.sandersnewmedia.com/why/2012/04/16/installing-pil-virtualenv-ubuntu-1204-precise-pangolin/>
- <http://blog.sina.com.cn/s/blog_5cd78a5d0101jcza.html>

<!--下面的部分是用来代码高亮的-->

<script type="text/javascript">
     $('pre').addClass('prettyprint linenums')
</script>

<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=sunburst"></script>
