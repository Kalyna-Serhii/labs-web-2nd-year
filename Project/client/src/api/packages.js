import fetchInstance from './fetchInstance';

const packages = {
    async getPackages() {
        try {
            return await fetchInstance.get('/packages');
        } catch (error) {
            throw new Error('Failed to receive packages: ' + error.message);
        }
    },
    async createPackage(body) {
        try {
            return await fetchInstance.post('/package', body);
        } catch (error) {
            throw new Error('Failed to create package');
        }
    },
    async updatePackage(packageId, body) {
        try {
            return await fetchInstance.patch(`/package/${packageId}`, body);
        } catch (error) {
            throw new Error('Failed to update package');
        }
    },
    async deletePackage(packageId) {
        try {
            await fetchInstance.delete(`/package/${packageId}`);
        } catch (error) {
            throw new Error('Failed to delete package');
        }
    },
};

export default packages;