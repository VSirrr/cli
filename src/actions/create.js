import inquirer from 'inquirer';
import download from '../utils/download.js';

export default async (name, options) => {
	const basePath = process.cwd();

	const { template } = await inquirer.prompt([
		{
			type: 'list',
			name: 'template',
			message: '请选择你要使用的模版？',
			choices: ['admin', 'mobile', 'node'],
		},
	]);

	switch (template) {
		case 'admin':
			download('VSirrr/vue-antd-admin', `${basePath}/${name}`);
			break;
		case 'mobile':
			download('VSirrr/vue-antd-admin', `${basePath}/${name}`);
			break;
		case 'node':
			download('VSirrr/vue-antd-admin', `${basePath}/${name}`);
			break;
	}
};
