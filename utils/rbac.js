export const permissions =[
    {
        role: 'user',
        actions: [
            'get_onecase',
            'get_allcases',
            'get_profile',
        ]
    },

    {
        role: 'admin',
        actions: [
            'get_profile',
            'count_case',
            'update_profile',
            'add_case',
            'update_case',
            'get_onecase',
            'get_allcases',
            'delete_case'
        ]
    }
]