/**
 * Created by HP1 on 2017/2/25.
 */
requirejs.config({
	baseUrl: '/',
	paths: {

		// 第三方库的路径配置
		jquery: 'lib/jquery/jquery.min',
		bootstrap: 'lib/bootstrap/js/bootstrap.min',
		jqueryCookie:'lib/jquery-cookie/jquery.cookie',
		nprogress:'lib/nprogress/nprogress', 
		template:'lib/artTemplate-3.0.1/template',

		// 自己写的路径配置
		common: 'js/common/common',
		userList: 'js/user/list',
		userAdd: 'js/user/add',
		userProfile: 'js/user/profile',
		teacherAdd: 'js/teacher/add',
		teacherList: 'js/teacher/list',
		homeLogin: 'js/home/login',
		homeRepass: 'js/home/repass',
		homeSettings: 'js/home/settings',
		courseAdd: 'js/course/add',
		courseAddStep1: 'js/course/add_step1',
		courseAddStep2: 'js/course/add_step2',
		courseAddStep3: 'js/course/add_step3',
		courseCategory: 'js/course/category',
		courseCategoryAdd: 'js/course/category_add',
		courseList: 'js/course/list',
		courseTopic: 'js/course/topic',
		index: 'js/index',

	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	}
});

//优先以最快的速度开启页面进度条，其他的JS加载延后
require(['nprogress'],function(nprogress){
	nprogress.start()
})


require(['jquery', 'bootstrap', 'common']);

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {
	var pathname = window.location.pathname;
	/**
	 * 判断登录页状态
	 * 1、登录页
	 * 1.1 没有SESSID，不用管
	 * 1.2有SESSID，跳转到登录页
	 * 
	 * 2、其他页
	 * 2.1没有SESSID，跳转到登录页
	 * 2.2有SESSID ，不用管
	 * */
	require(['jquery','jqueryCookie'],function($,undefined){
		var sessID = $.cookie('PHPSESSID');
		//登录页状态验证
		if(pathname==='/html/home/login.html'&& sessID){
			location.href = '/';
		}else if(pathname!=='/html/home/login.html'&& !sessID){
			location.href = '/html/home/login.html'
		}
		//如果没有发生页面跳转，就加载对应的JS模块
	switch(pathname) {
		case '/html/user/list.html':
		    require(['userList']);
		    break;
		case '/html/user/profile.html':
		    require(['userProfile']);
		    break;
		case '/html/teacher/add.html':
		    require(['teacherAdd']);
		    break;
		case '/html/teacher/list.html':
		    require(['teacherList']);
		    break;
		case '/html/home/login.html':
		    require(['homeLogin']);
		    break;
		case '/html/home/repass.html':
		    require(['homeRepass']);
		    break;
		case '/html/home/settings.html':
		    require(['homeSettings']);
		    break;
		case '/html/course/add.html':
		    require(['courseAdd']);
		    break;
		case '/html/course/add_step1.html':
		    require(['courseAddStep1']);
		    break;
		case '/html/course/add_step2.html':
		    require(['courseAddStep2']);
		    break;
		case '/html/course/add_step3.html':
		    require(['courseAddStep3']);
		    break;
		case '/html/course/category.html':
		    require(['courseCategory']);
		    break;
		case '/html/course/category_add.html':
		    require(['courseCategoryAdd']);
		    break;
		case '/html/course/list.html':
		    require(['courseList']);
		    break;
		case '/html/course/topic.html':
		    require(['courseTopic']);
		    break;
	     case '/':
	        require(['index']);
	        break;

	} 
	})
	
	
})(window);