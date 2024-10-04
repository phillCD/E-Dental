
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import InputMask from 'react-input-mask';

function AddPacient() {
    enum Genero {
        MASCULINO = 'MASCULINO',
        FEMININO = 'FEMININO',
        OUTRO = 'OUTRO'
    }

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState({});


    const fetchCepInfo = async (cep: string) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAddress(data);
            setFormData((prevFormData) => ({
                ...prevFormData,
                endereco: data.logradouro || '',
                bairro: data.bairro || '',
                cidade: data.localidade || '',
                estado: data.uf || ''
            }));
            console.log('CEP information:', data);
        } catch (error) {
            console.error('Error fetching CEP information:', error);
        }
    };

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCep = event.target.value;
        setCep(newCep);
        setFormData((prevFormData) => ({
            ...prevFormData,
            cep: newCep
        }));
        const cepPattern = /^\d{5}-\d{3}$/; // Regular expression to match fully entered CEP
        if (cepPattern.test(newCep)) { // Check if the CEP is fully entered and valid
            console.log('Fetching CEP information for:', newCep);
            fetchCepInfo(newCep);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form data:', formData);
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Server response:', data);
        }
        catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        celular: '',
        dataNascimento: '',
        genero: Genero.OUTRO, // Initialize with a specific value from the enum
        email: '',
        cep: '',
        estado: '',
        endereco: '',
        bairro: '',
        cidade: '',
        cargo: 'PACIENTE'
    });

    return (
        <div>
            <Navbar />
            <div className="p-20 px-36 flex items-center justify-center">
                <div className="bg-zinc-200 font-rubik w-full mx-auto rounded-lg shadow-lg overflow-hidden ">
                    <form onSubmit={handleSubmit}>
                        <p className="flex items-center justify-center text-3xl text-slate-800 flex font-bold p-10">Adicionar Paciente</p>
                        <div className='bg-slate-50 grid grid-cols-2'>
                            <div className='p-5'>
                                <h1 className='text-slate-800 flex font-bold p-1 pt-4'>Nome</h1>
                                <div className='flex items-center'>
                                    <input 
                                    type="text" 
                                    name="nome"
                                    className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2 w-full"
                                    value={formData.nome}
                                    onChange={handleInputChange} /> 
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Telefone</h1>
                                        <div className='flex items-center'>
                                            <InputMask
                                                mask="(99) 9999-9999"
                                                className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                                placeholder="(11) 1111-1111"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Celular</h1>
                                        <div className='flex items-center'>
                                            <InputMask
                                                mask="(99) 99999-9999"
                                                className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                                placeholder="(11) 11111-1111"
                                                name="celular"
                                                value={formData.celular}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Data de Nascimento</h1>
                                        <div className='flex items-center'>
                                            <InputMask 
                                                mask="99/99/9999"
                                                className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                                placeholder="DD/MM/AAAA"
                                                name="dataNascimento"
                                                value={formData.dataNascimento}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Gênero</h1>
                                        <select 
                                            name="genero"
                                            className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                            value={formData.genero}
                                            onChange={(event) => setFormData({ ...formData, genero: event.target.value as Genero })}
                                        >
                                            <option value={Genero.MASCULINO}>Masculino</option>
                                            <option value={Genero.FEMININO}>Feminino</option>
                                            <option value={Genero.OUTRO}>Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <h1 className='text-slate-800 flex font-bold p-1 pt-4'>Email</h1>
                                <div className='flex items-center'>
                                    <input
                                        name="email"
                                        type="email" 
                                        className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2 w-full"
                                        value={formData.email} 
                                        onChange={handleInputChange}
                                        /> 
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>CEP</h1>
                                        <div className='flex items-center'>
                                        <InputMask
                                                name="cep"
                                                type="text" 
                                                mask="99999-999"
                                                className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                                value={cep}
                                                onChange={handleCepChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Endereço</h1>
                                        <div className='flex items-center'>
                                        <input
                                            type="text"
                                            className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2 w-full"
                                            placeholder={address.logradouro}
                                            value={formData.endereco}
                                            onChange={handleInputChange}
                                            readOnly
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Bairro</h1>
                                        <div className='flex items-center'>
                                            <input
                                                type="text"
                                                className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                                placeholder={address.bairro}
                                                value={formData.bairro}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-slate-800 flex font-bold p-1 pt-6'>Cidade</h1>
                                        <div className='flex items-center'>
                                        <input
                                                type="text"
                                                className="bg-slate-100 rounded-sm outline outline-1 outline-gray-400 p-2"
                                                placeholder={address.localidade}
                                                value={formData.cidade}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='p-5 flex items-center justify-center bg-slate-50'>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white rounded-sm p-2"
                                >
                                    Cadastrar
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPacient;