import ora from 'ora';
import downloadRepo from 'download-git-repo';

export default (name, path) => {
	const spinner = ora('开始下载...').start();

	downloadRepo(name, path, (err) => {
		if (err) {
			spinner.succeed('下载失败');
			console.error(err);
		} else {
			spinner.succeed('下载完成');
		}
	});
};
