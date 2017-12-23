var gulp=require('gulp');
var connect=require('gulp-connect');

gulp.task('ser',function(){
	connect.server({
		root:'./',
		//当前项目主目录
		livereload:true
		// 自动刷新
	})
})
// 重新刷新html
gulp.task('html',function(){
	gulp.src('./*.html')
	 .pipe(connect.reload());
})
// 监听文件变化 动态刷新html
gulp.task('watch',function(){
	gulp.watch('./*.js',['html']);
	gulp.watch('./*.html',['html']);	
})
// 监听事件
gulp.task('server',['ser','watch'])



