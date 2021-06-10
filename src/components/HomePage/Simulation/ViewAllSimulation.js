import React, { useState } from 'react';
import bgViewSimulation from '../../../assets/images/background/biography-bg.png';
import { physics09, physics10, physics11, physics12 } from '../../../data/physicsSimulation';
import SingleSimulation from './SingleSimulation';

const BookIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 inline-block mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
			/>
		</svg>
	);
};

const ViewAllSimulation = (props) => {
	const [ openTab, setOpenTab ] = useState(1);

	return (
		<div>
			{props.viewSimulation ? (
				<section
					className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `url(${bgViewSimulation})`
					}}
					ref={props.compRef}
				>
					<div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-3 lg:px-4 lg:py-8">
						<div>
							<button
								className="simulation-cross-button"
								type="button"
								onClick={() => {
									props.setViewSimulation(false);
									props.setSelectTab(0);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-circle-x"
									width="28"
									height="28"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<circle cx="12" cy="12" r="9" />
									<path d="M10 10l4 4m0 -4l-4 4" />
								</svg>
							</button>
							<h2 className="font-display font-bold text-brand-900 text-3xl text-center pt-1 pb-4">
								{props.selectTab === 1 ? (
									'পদার্থ বিজ্ঞান'
								) : props.selectTab === 2 ? (
									'রসায়ন'
								) : props.selectTab === 3 ? (
									'জীব বিজ্ঞান'
								) : null}
							</h2>
						</div>
						<div className="flex flex-wrap flex-row">
							<div className="w-full">
								<ul
									className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row font-body"
									role="tablist"
								>
									<li className="simulation-class-list ">
										<a
											className={`simulation-class-name 
										${openTab === 1 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(1);
											}}
											data-toggle="tab"
											href="#12"
											role="tablist"
										>
											<BookIcon /> দ্বাদশ শ্রেণী
										</a>
									</li>
									<li className="simulation-class-list ">
										<a
											className={`simulation-class-name
										${openTab === 2 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(2);
											}}
											data-toggle="tab"
											href="#11"
											role="tablist"
										>
											<BookIcon /> একাদশ শ্রেণী
										</a>
									</li>
									<li className="simulation-class-list ">
										<a
											className={`simulation-class-name
										${openTab === 3 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(3);
											}}
											data-toggle="tab"
											href="#10"
											role="tablist"
										>
											<BookIcon /> দশম শ্রেণী
										</a>
									</li>
									<li className="simulation-class-list ">
										<a
											className={`simulation-class-name
										${openTab === 4 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(4);
											}}
											data-toggle="tab"
											href="#9"
											role="tablist"
										>
											<BookIcon /> নবম শ্রেণী
										</a>
									</li>
								</ul>
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-3xl rounded">
									<div className="px-4 py-5 flex-auto">
										<div className="tab-content tab-space">
											<div className={openTab === 1 ? 'block' : 'hidden'} id="12">
												<div className="simulation-item-outer">
													<div className="simulation-item-inner ">
														{physics12 &&
															physics12.map((item) => (
																<SingleSimulation item={item} key={item.id} />
															))}
													</div>
												</div>
											</div>

											<div className={openTab === 2 ? 'block' : 'hidden'} id="11">
												<div className="simulation-item-outer">
													<div className="simulation-item-inner ">
														{physics12 &&
															physics11.map((item) => (
																<SingleSimulation item={item} key={item.id} />
															))}
													</div>
												</div>
											</div>
											<div className={openTab === 3 ? 'block' : 'hidden'} id="10">
												<div className="simulation-item-outer">
													<div className="simulation-item-inner ">
														{physics12 &&
															physics10.map((item) => (
																<SingleSimulation item={item} key={item.id} />
															))}
													</div>
												</div>
											</div>
											<div className={openTab === 4 ? 'block' : 'hidden'} id="9">
												<div className="simulation-item-outer">
													<div className="simulation-item-inner ">
														{physics12 &&
															physics09.map((item) => (
																<SingleSimulation item={item} key={item.id} />
															))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : null}
		</div>
	);
};

export default ViewAllSimulation;