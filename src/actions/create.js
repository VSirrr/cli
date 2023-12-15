import inquirer from 'inquirer';
import download from '../utils/download.js';

export default async (name, options) => {
	const basePath = process.cwd();

	const { template } = await inquirer.prompt([
		{
			type: 'list',
			name: 'template',
			message: '请选择你要使用的模版？',
			choices: [
				'gulp-template',
				'vue-antd-admin',
				'nuxt2-mobile-template',
				'vite-vue-template',
			],
		},
	]);

	download(`VSirrr/${template}`, `${basePath}/${name}`);
};
