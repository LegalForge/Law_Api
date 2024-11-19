export const permissions =[
    {
        role: 'user',
        actions: [
            'get_onecase',
            'get_allcases',
            'get_profile',
            'get_onequiz',
            'get_allquiz',
            'update_quiz',
            'update_profile'
        ]
    },

    {
        role: 'admin',
        actions: [
            'get_profile',
            'count_case',
            'count_quiz',
            'update_profile',
            'add_case',
            'update_case',
            'get_onecase',
            'get_allcases',
            'delete_case',
            'add_quiz',
            'update_quiz',
            'get_onequiz',
            'get_allquiz',
            'delete_quiz'
        ]
    }
]