import React from 'react';

const News = () => {
	return (
		<div className='card'>
			<h2 className='card-header'>First post</h2>
			<div className='card-body'>
				<p className='card-text'>
					<small className='text-muted'>
						April 1, 2019 by <a href='#'>Roman</a>
					</small>
				</p>
				<p>
					Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
					porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
					cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
					justo sit amet risus.
				</p>
				<ul>
					<li>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
					</li>
					<li>Donec id elit non mi porta gravida at eget metus.</li>
					<li>Nulla vitae elit libero, a pharetra augue.</li>
				</ul>
				<p>
					Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
					consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
					sed consectetur.
				</p>
				<p>
					Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
					libero, a pharetra augue.
				</p>
			</div>
		</div>
	);
};

export default News;
