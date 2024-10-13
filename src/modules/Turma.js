export function Turma(codigo, nota) {
     return {
        aprovado: () => nota > 6,
     }
}