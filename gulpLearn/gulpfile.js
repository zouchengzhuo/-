/**
 * Created by czzou on 2016/1/11.
 */
var gulp=require("gulp");
var uglify=require("gulp-uglify");
gulp.task("min",function(){
    gulp.src("src/app.js").pipe(uglify()).pipe(gulp.dest("dist/"));
});
gulp.task("hi",function(){
    console.log("hi i'm zcz!");
    var stream=gulp.src("src/*");
    //stream.setEncoding("utf8");
    /*stream.on("data",function(data){
        Object.keys(data).forEach(function(key){
            console.log(key,data[key]);
        })
    });*/
})

// watch文件，自动执行数组中的任务
gulp.task("watch",function(){
    gulp.watch("src/*",["build"]);
    gulp.watch("src/*",function(event){
        console.log('Event type: ' + event.type);
        console.log('Event path: ' + event.path);

    });
})

//前置任务
gulp.task("min2",["hi"],function(){
    gulp.src("src/app.js").pipe(uglify()).pipe(gulp.dest("dist/"));
});

//任务列表
gulp.task("build",["hi","min"]);