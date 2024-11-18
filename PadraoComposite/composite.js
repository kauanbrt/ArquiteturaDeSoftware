
// ====================== ESTRUTURA DO SISTEMA (PADRAO COMPOSITE) ======================

//Funcionário
function Funcionario(nome, salario){
    return{
        getNome: () => nome,
        getSalario: () => salario,
    };
};

//Indivíduo
function Individuo(nome, salario){
    const funcionario = Funcionario(nome, salario);

    return {
        ...funcionario,
    };
};

//Departamento
function Departamento(nome){
    const funcionarios = [];

    return {
        add: (funcionario) => funcionarios.push(funcionario),
        remove: (funcionario) => {
            const index = funcionarios.indexOf(funcionario);
            if(index != -1){
                funcionarios.splice(index, 1);
            }
        },
        getChild: (index) => funcionarios[index],
        getSalario: () => funcionarios.reduce((total, funcionario) => total + funcionario.getSalario(), 0),
        getNome: () => nome,
    };
};

// ====================== EXEMPLO DE USO ======================

//Funcionários Individuais
const funcionario1 = Individuo("João", 3000);
const funcionario2 = Individuo("Maria", 3000);
const funcionario3 = Individuo("José", 3000);

//Departamento de TI
const departamentoTI = Departamento("Departamento de TI");
departamentoTI.add(funcionario1);
departamentoTI.add(funcionario2);

//Departamento Geral (possui o departamento de TI + 1 funcionário como indivíduo)
const departamentoGeral = Departamento("Departamento Geral");
departamentoTI.add(departamentoTI);
departamentoTI.add(funcionario3);

//Calculando o salário dos departamentos
console.log("Salário do Departamento de TI: ", departamentoTI.getSalario());
console.log("Salário do Departamento Geral: ", departamentoGeral.getSalario());

//Removendo 1 funcionário do departamento de TI
departamentoTI.remove(funcionario2);

//Recalculando o salário dos departamentos
console.log("Salário Atualizado do Departamento de TI: ", departamentoTI.getSalario());
console.log("Salário Atualizado do Departamento Geral: ", departamentoGeral.getSalario());