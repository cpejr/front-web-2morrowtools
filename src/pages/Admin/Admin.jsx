/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDeleteUsers, useGetUsers, useUpdateUser } from "../../services/ManagerService";
import { Container, Select, ProfilePic, Table, TableColumn, ModalStyle } from "./Styles";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModalDeleteUser from "../../components/features/Modals/ModalDeleteUser/ModalDeleteUser";
import { CloseOutlined } from "@ant-design/icons";
import { colors } from "../../styles/styleVariables";
export default function Admin() {
  const [users, setUsers] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [userID, setUserID] = useState("");
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <CloseOutlined style={{ color: colors.white }} />;
  const columns = [
    { field: "imageURL", header: "Foto" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "type", header: "Type" },
    { field: "manage", header: "Manage" },
  ];
  const selectOptions = [
    { label: "Adminstrador", value: "Admin" },
    { label: "Usuário", value: "User" },
  ];

  async function getAllUsers() {
    const users = await useGetUsers({});
    const formattedUsers = users.map((user) => ({
      imageURL: (
        <ProfilePic src={user.imageURL} alt={user.name} style={{ width: "50px", height: "50px" }} />
      ),
      name: user.name,
      email: user.email,
      type: (
        <Select
          value={[user.type]}
          onChange={(e) => handleTypeChange(user?._id, e.value)}
          options={selectOptions}
          placeholder={user.type}
          optionLabel='label'
          className='w-full md:w-20rem'
        />
      ),
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: "pointer" }}
          onClick={() => {
            openModalDelete();
            setUserID(user?._id);
          }}
        />
      ),
    }));
    setUsers(formattedUsers);
  }
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleTypeChange = (_id, type) => {
    const body = { type };
    UpdatingUsers(_id, body);
  };
  const handleUserDelete = (_id) => {
    DeletingUsers(_id);
  };

  const UpdatingUsers = async (_id, body) => {
    try {
      await useUpdateUser(_id, body);
      toast.success("Usuário alterado com sucesso");
      window.location.reload();
    } catch (error) {
      toast.error("Erro ao editar o usuário");
      toast.clearWaitingQueue();
    }
  };

  const DeletingUsers = async (_id) => {
    try {
      await useDeleteUsers(_id);
      toast.success("Usuário Deleteado com sucesso");
      window.location.reload();
    } catch (error) {
      toast.error("Erro ao deletar o usuário");
      toast.clearWaitingQueue();
    }
  };

  return (
    <Container>
      <Table value={users} paginator rows={10} removableSort>
        {columns.map((data) => (
          <TableColumn sortable key={data.field} field={data.field} header={data.header} />
        ))}
      </Table>
      <ModalStyle
        open={modalDelete}
        onCancel={closeModalDelete}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      >
        <ModalDeleteUser close={closeModalDelete} handleUserDelete={handleUserDelete} id={userID} />
      </ModalStyle>
    </Container>
  );
}
