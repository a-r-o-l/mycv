import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

function TracksTable({ discos, artistas, setDeckA, setDeckB }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-10">My music</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead align="right" className="text-end">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {discos.map((disco) => (
            <TableRow key={disco.id}>
              <TableCell>
                <Avatar className="w-12 h-12">
                  <AvatarImage src={disco.imagen} alt={disco.title} />
                </Avatar>
              </TableCell>
              <TableCell>{disco.title}</TableCell>
              <TableCell>
                {
                  artistas.find((artista) => artista.id === disco.artistaId)
                    ?.nombre
                }
              </TableCell>
              <TableCell align="right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setDeckA(disco.id)}>
                      Deck A
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDeckB(disco.id)}>
                      Deck B
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TracksTable;
