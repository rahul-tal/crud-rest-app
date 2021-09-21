export const mockUsers = {
    findById: jest.fn().mockImplementation(() => {
        return {
            name: 'mockUser',
            age: '21',
            'email': 'xyz'
        }

    })
}