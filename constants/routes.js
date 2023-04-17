const indexPath = '/pages'
const calculatorPath = '/pages/calculators'

export const routes = {
    index: '/',
    calculators: {
        duty:{
            index: `${calculatorPath}/duty/DutyCalculator`,
            details: `${calculatorPath}/duty/details`,
        },
        payee:{
            index: `${calculatorPath}/payee`,
            details: `${calculatorPath}/payee/details`,
        },
        feedback: `${indexPath}/feedback`,
        scanner: `${indexPath}/scanner`,
        tipoff: `${indexPath}/tipoff`,
    }
}