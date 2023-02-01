import React, { useState, useMemo, useEffect, useCallback } from "react";
import { send } from "emailjs-com";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./InfoElements";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}) => {
  let currentState = localStorage.getItem("authenticated");
  let usernameEmail = localStorage.getItem("username");
  const [userData, setUserData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!currentState) {
      send("service_sahlnnk", "template_btux5b5", toSend, "FOBMBWabjWQNgamAp")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } else {
      toSend.to_name = "un usuario";
      toSend.reply_to = usernameEmail;

      send("service_sahlnnk", "template_btux5b5", toSend, "FOBMBWabjWQNgamAp")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(data);
  };

  const showReportTable = () => {
    setIsVisible(true);
    
    fetch("https://cors-anywhere.herokuapp.com/https://darvaron14.pythonanywhere.com/reportes/"+usernameEmail, {
      mode: "cors",
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJEZXYiLCJjbGllbnRfc2VjcmV0IjoiRGV2UGFzcyJ9.z6N3qREztea2sj35gMMY0LPJBlH8t_k4RbfSDfs-wLo",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
    })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
      var cors_api_host = 'cors-anywhere.herokuapp.com';
      var cors_api_url = 'https://' + cors_api_host + '/';
      var slice = [].slice;
      var origin = window.location.protocol + '//' + window.location.host;
      var open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
              targetOrigin[1] !== cors_api_host) {
              args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
      };

    fetch("https://cors-anywhere.herokuapp.com/https://darvaron14.pythonanywhere.com/baches", {
      mode: "cors",
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJEZXYiLCJjbGllbnRfc2VjcmV0IjoiRGV2UGFzcyJ9.z6N3qREztea2sj35gMMY0LPJBlH8t_k4RbfSDfs-wLo",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setUserData(responseJson.baches);
        console.log(responseJson.baches);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const data = userData;

  const columns = useMemo(
    () => [
      {
        Header: "Dirección",
        accessor: "direccion",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Latitud",
        accessor: "latitud",
      },
      {
        Header: "Longitud",
        accessor: "longitud",
      },
      {
        Header: "Tiempo tomado",
        accessor: "marca_tiempo",
      },
      {
        Header: "Método",
        accessor: "metodo",
      },
      {
        Header: "Precisión GPS",
        accessor: "precision_gps",
      },
      {
        Header: "Sistema de Coordenadas",
        accessor: "sistema_coordenadas",
      },
      {
        Header: "Tipo",
        accessor: "tipo",
      },
      {
        Header: "Usuario",
        accessor: "usuario",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossOrigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
        crossOrigin=""
      ></script>
      {id === "report" ? (
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topline}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>

              {isVisible === false? (
                <FormButton onClick={showReportTable} style={{ marginBottom: "30px", width: "200px" }}>Mostrar Reportes</FormButton>
              ) : null}
              <br/>
                {id === "report" && isVisible=== true? (
                  <>
                    <GlobalFilter
                      filter={globalFilter}
                      setFilter={setGlobalFilter}
                    />
                    <p style={{ paddingTop: "20px" }}></p>
                    <div style={{ overflow: "scroll"}}>
                      <table
                        {...getTableProps()}
                        style={{ border: "solid 1px white" }}
                      >
                        <thead>
                          {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                <th
                                  {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                  )}
                                  style={{
                                    gap: "10px",
                                    borderBottom: "solid 3px #01bf71",
                                    color: "white",
                                  }}
                                >
                                  {column.render("Header")}
                                  <span>
                                    {column.isSorted
                                      ? column.isSortedDesc
                                        ? "🔽"
                                        : "🔼"
                                      : ""}
                                  </span>
                                </th>
                              ))}
                            </tr>
                          ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                          {page.map((row) => {
                            prepareRow(row);
                            return (
                              <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                  return (
                                    <td
                                      {...cell.getCellProps()}
                                      style={{
                                        padding: "10px",
                                        border: "solid 1px gray",
                                      }}
                                    >
                                      {cell.render("Cell")}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : null}
                <p style={{ paddingTop: "20px" }}></p>
                {id === "report" && isVisible=== true ? (
                  <div>
                    <button
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      {"<<"}
                    </button>{" "}
                    <button
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      Previous
                    </button>{" "}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                      Next
                    </button>{" "}
                    <button
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                    >
                      {">>"}
                    </button>{" "}
                    <span>
                      Page{" "}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{" "}
                    </span>
                    <span>
                      | Go to page:{" "}
                      <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                          const pageNumber = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          gotoPage(pageNumber);
                        }}
                        style={{ width: "50px" }}
                      />
                    </span>{" "}
                    {/* <select
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                      {[5, 10, 15].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select> */}
                  </div>
                ) : null}
                
                {id !== "discover" && id !== "report" ? (
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                ) : null}
                {id === "discover" ? (
                  <FormContent onSubmit={onSubmit}>
                    <Form action="#">
                      <FormH1>Contáctanos</FormH1>

                      {!currentState ? (
                        <FormLabel htmlFor="for">Nombre</FormLabel>
                      ) : null}

                      {!currentState ? (
                        <FormInput
                          type="text"
                          name="to_name"
                          placeholder="Tú nombre"
                          value={toSend.to_name}
                          onChange={handleChange}
                          required
                        />
                      ) : null}

                      {!currentState ? (
                        <FormLabel htmlFor="for">Email</FormLabel>
                      ) : null}

                      {!currentState ? (
                        <FormInput
                          type="email"
                          name="reply_to"
                          placeholder="Tú email"
                          value={toSend.reply_to}
                          onChange={handleChange}
                          required
                        />
                      ) : null}

                      <FormLabel htmlFor="for">Mensaje</FormLabel>
                      <FormTextArea
                        name="message"
                        placeholder="Tú mensaje"
                        value={toSend.message}
                        onChange={handleChange}
                      />
                      <FormButton type="submit">Enviar</FormButton>
                    </Form>
                  </FormContent>
                ) : null}
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      ) : (
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topline}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                {id !== "discover" && id !== "signup" ? (
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                ) : null}
                {id === "discover" ? (
                  <FormContent onSubmit={onSubmit}>
                    <Form action="#">
                      <FormH1>Contáctanos</FormH1>

                      {!currentState ? (
                        <FormLabel htmlFor="for">Nombre</FormLabel>
                      ) : null}

                      {!currentState ? (
                        <FormInput
                          type="text"
                          name="to_name"
                          placeholder="Tú nombre"
                          value={toSend.to_name}
                          onChange={handleChange}
                          required
                        />
                      ) : null}

                      {!currentState ? (
                        <FormLabel htmlFor="for">Email</FormLabel>
                      ) : null}

                      {!currentState ? (
                        <FormInput
                          type="email"
                          name="reply_to"
                          placeholder="Tú email"
                          value={toSend.reply_to}
                          onChange={handleChange}
                          required
                        />
                      ) : null}

                      <FormLabel htmlFor="for">Mensaje</FormLabel>
                      <FormTextArea
                        name="message"
                        placeholder="Tú mensaje"
                        value={toSend.message}
                        onChange={handleChange}
                      />
                      <FormButton type="submit">Enviar</FormButton>
                    </Form>
                  </FormContent>
                ) : null}
                {id === "signup" ? (
                  <MapContainer
                    style={{ width: "100%", height: "600px", zIndex: "9" }}
                    center={[4.729202, -74.045829]}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {[...userData].map((x, i) => (
                      <Marker
                        position={[userData[i].latitud, userData[i].longitud]}
                        key={i}
                      >
                        <Popup>
                          Dirección: {userData[i].direccion} <br />
                          Latitud: {userData[i].latitud} <br />
                          Longitud: {userData[i].longitud} <br />
                          Marca Tiempo: {userData[i].marca_tiempo} <br />
                          Método: {userData[i].metodo} <br />
                          Precisión GPS: {userData[i].precision_gps}
                          <br />
                          Sistema de Coordenadas:{" "}
                          {userData[i].sistema_coordenadas}
                          <br />
                          Tipo: {userData[i].tipo}
                          <br />
                          Usuario: {userData[i].usuario}
                          <br />
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                ) : null}
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      )}
    </>
  );
};

export default InfoSection;

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Buscar:{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};
