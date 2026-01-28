import { useState } from "react";
import type { ITarefa } from "./types/tarefa";
import { TarefaItem } from "./components/TarefaItem";
import logo from './assets/favicon.png'; // Ajuste os pontos ../ se necessário


export default function App() {
  // Estado para a lista: Começa como um array vazio de ITarefa
  const [lista, setLista] = useState<ITarefa[]>([]);

  // Estado para o input: Começa como string vazia
  const [textoInput, setTextoInput] = useState<string>("");

  // Função para adicionar (CREATE)
  const adicionar = () => {
    if (!textoInput.trim()) return;

    const novaTarefa: ITarefa = {
      id: Date.now(),
      texto: textoInput,
      concluida: false,
    };

    setLista([...lista, novaTarefa]); // Imutabilidade: criamos uma lista nova com a tarefa
    setTextoInput(""); // Limpa o campo
  };

  // Função para deletar (DELETE)
  const deletar = (id: number) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  // Função para alternar status de conclusão (UPDATE)
  const alternarConcluido = (id: number) => {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item,
      ),
    );
  };

  // Lógica para a data (estilo Taskmaster)
  const dataHoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    // Fundo com gradiente escuro
    <div className="min-h-screen bg-[#0f172a] bg-linear-to-br from-[#0f172a] to-[#1e1b4b] text-gray-300 p-4 md:p-10 font-sans">
      {/* Header Superior */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-12 text-xs tracking-[0.2em] text-gray-500 font-bold">
        <div className="flex items-center gap-2">
          <img src={logo}
            className="bg-gray-700 w-8 h-8 p-1 rounded-full"
            alt="Ícone inicial"
          />{" "}
          TaskMaster
        </div>
        <span>{dataHoje.toUpperCase()}</span>
      </header>

      {/* Card Principal com efeito de vidro (Glassmorphism) */}
      <main className="max-w-lg mx-auto bg-[#111827]/60 backdrop-blur-xl border border-gray-800 p-8 rounded-4xl shadow-2xl">
        <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-3">
          Today's Tasks
          <span className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center text-[10px]">
            ✓
          </span>
        </h2>

        {/* LISTA */}
        <ul className="space-y-3 mb-8">
          {lista.map((item) => (
            <TarefaItem
              key={item.id}
              tarefa={item}
              onDelete={deletar}
              onToggle={alternarConcluido} // Lembre-se de criar essa função!
            />
          ))}
        </ul>

        {/* INPUT ESTILIZADO */}
        <div className="relative group">
          <input
            type="text"
            value={textoInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTextoInput(e.target.value)
            }
            className="w-full bg-[#1f2937]/50 border border-gray-700 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-all placeholder:text-gray-600"
            placeholder="Add a new task..."
          />
          <button
            onClick={adicionar}
            className="absolute right-2 top-2 bg-[#16f9f5] hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-bold transition-colors"
          >
            Add
          </button>
        </div>
      </main>

      <footer className="text-center mt-10 text-[10px] text-gray-600 tracking-widest">
        CREATED WITH REACT, TYPESCRIPT & TAILWIND CSS BY GUSTAVO RAMOS CAETANO
      </footer>
    </div>
  );
}
