import { program } from 'commander';
import createAction from './actions/create.js';
import pkg from '../package.json' assert { type: 'json' };

program
	.name('vsirrr')
	.description('使用模版创建项目，快速开发')
	.version(pkg.version);

program.command('create <app-name>').action(createAction);

program.parse();
