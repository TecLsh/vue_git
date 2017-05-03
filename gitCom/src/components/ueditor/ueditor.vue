<template>
  <div id="uEditor">
    <script id="container" name="content" type="text/plain"></script>
    <!-- 配置文件 -->
    <script type="text/javascript" src="ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="ueditor.all.js"></script>
    <!-- 实例化编辑器 -->
    <script type="text/javascript">
      var ue = UE.getEditor('container')
    </script>
  </div>
</template>

