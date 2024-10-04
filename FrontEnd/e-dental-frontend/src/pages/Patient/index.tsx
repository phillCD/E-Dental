import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Circle from '../../assets/account_circle.svg';
import Pessoa from '../../assets/person.svg';
import Menu from '../../assets/menu.svg';
import CheckBox from '../../assets/check_box.svg';
import Calendar from '../../assets/calendar.svg';
import CheckList from '../../assets/checklist.svg';
import Money from '../../assets/payment.svg';
import AttachFile from '../../assets/attach_file.svg';
import Edit from '../../assets/edit.svg';
import { useParams } from 'react-router-dom';

function Patient() {
    interface Patient {
        nome: string;
        email: string;
        celular: string;
        telefone: string;
        endereco: string;
        bairro: string;
        cidade: string;
        cep: string;
        dataNascimento: string;
        gender: string;
    }

    const { id } = useParams();
    const [patient, setPatient] = useState<Patient>({ nome: '' , email: '', celular: '', telefone: '', endereco: '', bairro: '', cidade: '', cep: '', dataNascimento: '', gender: '' });
    const fetchPatient = async () => {
        const patientId = Number(id);
        const response = await fetch(`http://localhost:8080/users/${patientId}`);
        const data = await response.json();
        setPatient(data);
    }

    useEffect(() => {
        fetchPatient();
        console.log(patient);
    }, [id]);

    return (
        <>
        <Navbar />
            <div className="p-5 flex items-center justify-center">
                <div className="bg-zinc-300 font-rubik w-full mx-auto rounded-lg shadow-lg overflow-hidden">
                    <div className='flex items-center p-5'>
                        <img src={Circle} alt="circle" className='w-36 h-36 p-3'/>
                        <p className="text-3xl text-slate-800 flex font-bold p-5">{patient.nome}</p>
                        <img src={Edit} alt="edit" className='mr-2 p-2' />
                    </div>
                    <div className='grid grid-cols-7 divide-x divide-black bg-zinc-200'>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={Pessoa} alt="pessoa" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Dados Pessoais</a>
                        </div>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={Menu} alt="menu" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Anamnese</a>
                        </div>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={CheckBox} alt="checkbox" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Exame Clínico</a>
                        </div>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={Calendar} alt="calendar" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Plano de Tratamento</a>
                        </div>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={CheckList} alt="checklist" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Evolução Clínica</a>
                        </div>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={Money} alt="money" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Financeiro</a>
                        </div>
                        <div className='flex items-center p-2 hover:bg-zinc-500 col-span-1'>
                            <img src={AttachFile} alt="attachfile" className='mr-2'/>
                            <a href="#" className='flex-grow text-center'>Anexar Imagens</a>
                        </div>
                    </div>
                    <div className='bg-slate-50 grid grid-cols-2'>
                        <div className='p-5'>
                            <h1 className='text-slate-800 flex font-bold p-1'>Nome</h1>
                            <div className='flex items-center'>
                                <p className='p-2'>{patient.nome}</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Telefone</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.telefone}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Celular</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.celular}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Data de Nascimento</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.dataNascimento}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Gênero</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            <h1 className='text-slate-800 flex font-bold p-1'>Email</h1>
                            <div className='flex items-center'>
                                <p className='p-2'>{patient.email}</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>CEP</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.cep}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Endereço</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.endereco}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Bairro</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.bairro}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-slate-800 flex font-bold p-1'>Cidade</h1>
                                    <div className='flex items-center'>
                                        <p className='p-2'>{patient.cidade}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-50'>
                        <h1 className='text-slate-800 flex font-bold p-1 flex justify-center items-center'>Observações</h1>
                        <p className='p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi blanditiis velit voluptates aspernatur quis! Ratione itaque perferendis sunt consectetur exercitationem ipsum cupiditate fuga inventore repellat asperiores aspernatur consequatur, illo modi.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Patient;