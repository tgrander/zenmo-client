import types from './types';
import transactionTypes from '../transactions/types';

const categories = {
	allCategories: [
		'dac6ebe3-6230-4655-058b-06992062acef',
		'e635de21-033a-df83-6391-8110a07f8bde',
		'636d41af-85fd-eba9-6c02-3ae16084bc30',
		'3f7a5799-cd48-9739-c939-ce2fab592353',
		'cd01e8ce-2819-0d13-6bb1-999b9dc4237b',
		'a67694f5-5be4-6009-9d6d-4eed54cfd717',
		'36bb95d5-fe50-36d3-ced2-2faaa3fcc104',
		'bdba8527-b0d2-fd21-3526-0e705e988ae5',
		'7179d007-9a87-707f-7602-b000cb02f252',
		'94773d9c-41dc-74f3-d29a-252a62ac9693',
		'91228143-33e8-5296-1bb5-2541946b93c7',
		'af7184a4-b34d-5397-e8b1-43a55bb988fe',
		'3657504e-9664-1461-4a8d-1fbedcb7c478',
		'e2367a00-ef76-7e47-8f25-103c1263de09',
		'9593883f-9efb-4f13-ac98-95c08f70c747',
		'1f05f3ba-7f34-776b-84fb-7957853ef916',
		'5641372b-7810-9f19-c68b-88ae08fc53a9',
		'521f6be6-3375-fa9f-d85d-b5453c8ff056',
		'9f354f1d-707c-631c-d2d4-ce48498c36df',
		'ad525a96-2ad0-c383-44a0-aedc05f3fe3d',
		'd01a13f3-a77f-348d-aeee-dae220157ba9',
		'4d00dee3-4305-1c53-b054-69415646d5e6',
		'01388b54-0a6c-1698-057d-164a06555df6',
		'229db9ea-2d4c-7d27-ee62-a35a7f5b236a',
		'1d54204d-d4c4-ccb6-afd2-aa35461e2334',
		'a371760d-9bfc-3765-12c4-1a4c55c3bdc1',
		'b4b5b07f-5876-e933-1154-6d23e53ff2df',
		'f0fcfb2f-1053-1f7f-28f0-fb657e3eaeb9',
		'60f69d2d-370c-4a9e-2505-5bc2d4380d90',
		'4267759b-71c9-9199-b3ed-55e857dd1e96',
		'f7ab0181-9d4f-450c-3e5c-5e43ca2cc47c',
		'cb074756-59a4-1f0c-3dc1-15b1669674af',
		'fd85ca8c-d6ac-fafe-d747-a079fe755872',
	],
	allTypes: [
		'6471e08c-6d61-1b0c-872a-265ae2e21c54',
		'4633125d-c92a-1f73-60d0-916ef008401f',
		'a73599e7-1139-2671-e979-ba8bcdafeca8',
		'10334694-f661-a3dd-da40-65e75ca7fc80',
		'd6145311-cf57-89b5-04d9-7de9eb5d6eaa',
		'ed1a7cc7-8e5e-642c-837f-5bf68f5caab7',
	],
	categoriesById: {
		'dac6ebe3-6230-4655-058b-06992062acef': {
			id: 'dac6ebe3-6230-4655-058b-06992062acef',
			type: 'Income',
			category: 'Paychecks',
		},
		'e635de21-033a-df83-6391-8110a07f8bde': {
			id: 'e635de21-033a-df83-6391-8110a07f8bde',
			type: 'Income',
			category: 'Tax Return',
		},
		'636d41af-85fd-eba9-6c02-3ae16084bc30': {
			id: '636d41af-85fd-eba9-6c02-3ae16084bc30',
			type: 'Income',
			category: 'Citi Cash Back',
		},
		'3f7a5799-cd48-9739-c939-ce2fab592353': {
			id: '3f7a5799-cd48-9739-c939-ce2fab592353',
			type: 'Debt Payments',
			category: 'Bank of America CC',
		},
		'cd01e8ce-2819-0d13-6bb1-999b9dc4237b': {
			id: 'cd01e8ce-2819-0d13-6bb1-999b9dc4237b',
			type: 'Debt Payments',
			category: 'Interest & Fees',
		},
		'a67694f5-5be4-6009-9d6d-4eed54cfd717': {
			id: 'a67694f5-5be4-6009-9d6d-4eed54cfd717',
			type: 'Debt Payments',
			category: 'Bootcamp Loans',
		},
		'36bb95d5-fe50-36d3-ced2-2faaa3fcc104': {
			id: '36bb95d5-fe50-36d3-ced2-2faaa3fcc104',
			type: 'Debt Payments',
			category: 'Student Loans',
		},
		'bdba8527-b0d2-fd21-3526-0e705e988ae5': {
			id: 'bdba8527-b0d2-fd21-3526-0e705e988ae5',
			type: 'Debt Payments',
			category: 'Couch Installments',
		},
		'7179d007-9a87-707f-7602-b000cb02f252': {
			id: '7179d007-9a87-707f-7602-b000cb02f252',
			type: 'Fixed Costs',
			category: 'Rent',
		},
		'94773d9c-41dc-74f3-d29a-252a62ac9693': {
			id: '94773d9c-41dc-74f3-d29a-252a62ac9693',
			type: 'Fixed Costs',
			category: 'Electric',
		},
		'91228143-33e8-5296-1bb5-2541946b93c7': {
			id: '91228143-33e8-5296-1bb5-2541946b93c7',
			type: 'Fixed Costs',
			category: 'Gas',
		},
		'af7184a4-b34d-5397-e8b1-43a55bb988fe': {
			id: 'af7184a4-b34d-5397-e8b1-43a55bb988fe',
			type: 'Fixed Costs',
			category: 'Internet',
		},
		'3657504e-9664-1461-4a8d-1fbedcb7c478': {
			id: '3657504e-9664-1461-4a8d-1fbedcb7c478',
			type: 'Fixed Costs',
			category: 'Phone Bill',
		},
		'e2367a00-ef76-7e47-8f25-103c1263de09': {
			id: 'e2367a00-ef76-7e47-8f25-103c1263de09',
			type: 'Fixed Costs',
			category: 'Transportation',
		},
		'9593883f-9efb-4f13-ac98-95c08f70c747': {
			id: '9593883f-9efb-4f13-ac98-95c08f70c747',
			type: 'Quality of Life',
			category: 'Groceries',
		},
		'1f05f3ba-7f34-776b-84fb-7957853ef916': {
			id: '1f05f3ba-7f34-776b-84fb-7957853ef916',
			type: 'Quality of Life',
			category: 'Fast Food',
		},
		'5641372b-7810-9f19-c68b-88ae08fc53a9': {
			id: '5641372b-7810-9f19-c68b-88ae08fc53a9',
			type: 'Quality of Life',
			category: "Renter's/Home Insurance",
		},
		'521f6be6-3375-fa9f-d85d-b5453c8ff056': {
			id: '521f6be6-3375-fa9f-d85d-b5453c8ff056',
			type: 'Quality of Life',
			category: 'Therapy',
		},
		'9f354f1d-707c-631c-d2d4-ce48498c36df': {
			id: '9f354f1d-707c-631c-d2d4-ce48498c36df',
			type: 'Quality of Life',
			category: 'Medical',
		},
		'ad525a96-2ad0-c383-44a0-aedc05f3fe3d': {
			id: 'ad525a96-2ad0-c383-44a0-aedc05f3fe3d',
			type: 'Quality of Life',
			category: 'Software Subscriptions',
		},
		'd01a13f3-a77f-348d-aeee-dae220157ba9': {
			id: 'd01a13f3-a77f-348d-aeee-dae220157ba9',
			type: 'Quality of Life',
			category: 'Protein & Supplements',
		},
		'4d00dee3-4305-1c53-b054-69415646d5e6': {
			id: '4d00dee3-4305-1c53-b054-69415646d5e6',
			type: 'Quality of Life',
			category: 'Hair',
		},
		'01388b54-0a6c-1698-057d-164a06555df6': {
			id: '01388b54-0a6c-1698-057d-164a06555df6',
			type: 'Quality of Life',
			category: 'Fitness',
		},
		'229db9ea-2d4c-7d27-ee62-a35a7f5b236a': {
			id: '229db9ea-2d4c-7d27-ee62-a35a7f5b236a',
			type: 'Quality of Life',
			category: 'Education',
		},
		'1d54204d-d4c4-ccb6-afd2-aa35461e2334': {
			id: '1d54204d-d4c4-ccb6-afd2-aa35461e2334',
			type: 'Quality of Life',
			category: 'Miscellaneous',
		},
		'a371760d-9bfc-3765-12c4-1a4c55c3bdc1': {
			id: 'a371760d-9bfc-3765-12c4-1a4c55c3bdc1',
			type: 'Spend Less On',
			category: 'Movies',
		},
		'b4b5b07f-5876-e933-1154-6d23e53ff2df': {
			id: 'b4b5b07f-5876-e933-1154-6d23e53ff2df',
			type: 'Spend Less On',
			category: 'Music',
		},
		'f0fcfb2f-1053-1f7f-28f0-fb657e3eaeb9': {
			id: 'f0fcfb2f-1053-1f7f-28f0-fb657e3eaeb9',
			type: 'Spend Less On',
			category: 'Shopping',
		},
		'60f69d2d-370c-4a9e-2505-5bc2d4380d90': {
			id: '60f69d2d-370c-4a9e-2505-5bc2d4380d90',
			type: 'Spend Less On',
			category: 'Restaurants',
		},
		'4267759b-71c9-9199-b3ed-55e857dd1e96': {
			id: '4267759b-71c9-9199-b3ed-55e857dd1e96',
			type: 'Spend Less On',
			category: 'Coffee',
		},
		'f7ab0181-9d4f-450c-3e5c-5e43ca2cc47c': {
			id: 'f7ab0181-9d4f-450c-3e5c-5e43ca2cc47c',
			type: 'Spend Less On',
			category: 'Alcohol',
		},
		'cb074756-59a4-1f0c-3dc1-15b1669674af': {
			id: 'cb074756-59a4-1f0c-3dc1-15b1669674af',
			type: 'Spend Less On',
			category: 'Car Service',
		},
		'fd85ca8c-d6ac-fafe-d747-a079fe755872': {
			id: 'fd85ca8c-d6ac-fafe-d747-a079fe755872',
			type: 'One-Time Expenses',
			category: 'Contact Lenses',
		},
	},
	typesById: {
		'6471e08c-6d61-1b0c-872a-265ae2e21c54': {
			id: '6471e08c-6d61-1b0c-872a-265ae2e21c54',
			type: 'Income',
			allCategories: [
				'dac6ebe3-6230-4655-058b-06992062acef',
				'e635de21-033a-df83-6391-8110a07f8bde',
				'636d41af-85fd-eba9-6c02-3ae16084bc30',
			],
		},
		'4633125d-c92a-1f73-60d0-916ef008401f': {
			id: '4633125d-c92a-1f73-60d0-916ef008401f',
			type: 'Debt Payments',
			allCategories: [
				'3f7a5799-cd48-9739-c939-ce2fab592353',
				'cd01e8ce-2819-0d13-6bb1-999b9dc4237b',
				'a67694f5-5be4-6009-9d6d-4eed54cfd717',
				'36bb95d5-fe50-36d3-ced2-2faaa3fcc104',
				'bdba8527-b0d2-fd21-3526-0e705e988ae5',
			],
		},
		'a73599e7-1139-2671-e979-ba8bcdafeca8': {
			id: 'a73599e7-1139-2671-e979-ba8bcdafeca8',
			type: 'Fixed Costs',
			allCategories: [
				'7179d007-9a87-707f-7602-b000cb02f252',
				'94773d9c-41dc-74f3-d29a-252a62ac9693',
				'91228143-33e8-5296-1bb5-2541946b93c7',
				'af7184a4-b34d-5397-e8b1-43a55bb988fe',
				'3657504e-9664-1461-4a8d-1fbedcb7c478',
				'e2367a00-ef76-7e47-8f25-103c1263de09',
			],
		},
		'10334694-f661-a3dd-da40-65e75ca7fc80': {
			id: '10334694-f661-a3dd-da40-65e75ca7fc80',
			type: 'Quality of Life',
			allCategories: [
				'9593883f-9efb-4f13-ac98-95c08f70c747',
				'1f05f3ba-7f34-776b-84fb-7957853ef916',
				'5641372b-7810-9f19-c68b-88ae08fc53a9',
				'521f6be6-3375-fa9f-d85d-b5453c8ff056',
				'9f354f1d-707c-631c-d2d4-ce48498c36df',
				'ad525a96-2ad0-c383-44a0-aedc05f3fe3d',
				'd01a13f3-a77f-348d-aeee-dae220157ba9',
				'4d00dee3-4305-1c53-b054-69415646d5e6',
				'01388b54-0a6c-1698-057d-164a06555df6',
				'229db9ea-2d4c-7d27-ee62-a35a7f5b236a',
				'1d54204d-d4c4-ccb6-afd2-aa35461e2334',
			],
		},
		'd6145311-cf57-89b5-04d9-7de9eb5d6eaa': {
			id: 'd6145311-cf57-89b5-04d9-7de9eb5d6eaa',
			type: 'Spend Less On',
			allCategories: [
				'a371760d-9bfc-3765-12c4-1a4c55c3bdc1',
				'b4b5b07f-5876-e933-1154-6d23e53ff2df',
				'f0fcfb2f-1053-1f7f-28f0-fb657e3eaeb9',
				'60f69d2d-370c-4a9e-2505-5bc2d4380d90',
				'4267759b-71c9-9199-b3ed-55e857dd1e96',
				'f7ab0181-9d4f-450c-3e5c-5e43ca2cc47c',
				'cb074756-59a4-1f0c-3dc1-15b1669674af',
			],
		},
		'ed1a7cc7-8e5e-642c-837f-5bf68f5caab7': {
			id: 'ed1a7cc7-8e5e-642c-837f-5bf68f5caab7',
			type: 'One-Time Expenses',
			allCategories: ['fd85ca8c-d6ac-fafe-d747-a079fe755872'],
		},
	},
};

const initialState = {
	allCategories: categories.allCategories,
	allTypes: categories.allTypes,
	categoriesById: categories.categoriesById,
	typesById: categories.typesById,
};

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CATEGORIZE_TRANSACTIONS:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default categoriesReducer;
